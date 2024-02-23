declare global {
  interface Window {
    UserData: any;
  }
}
export function ex11() {
  // 1 - Crie uma interface UserData para o formulário abaixo
  // 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
  // 3 - Adicione um evento de keyup ao formulário
  // 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
  // 5 - Salve UserData no localStorage
  // 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
  // 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
  interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
  }

  function validJSON(value: string) {
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  }

  function isUserData(value: unknown): value is UserData {
    if (
      value &&
      typeof value === 'object' &&
      ('nome' in value || 'email' in value || 'cpf' in value)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function loadLocalStorage() {
    let UserDataLocal = window.localStorage.getItem('UserData');
    if (UserDataLocal && validJSON(UserDataLocal)) {
      UserDataLocal = JSON.parse(UserDataLocal);
      if (isUserData(UserDataLocal)) {
        window.UserData = UserDataLocal;
        Object.entries(UserDataLocal).forEach(([key, value]) => {
          const input = document.getElementById(key);
          if (input instanceof HTMLInputElement) {
            input.value = value;
          }
        });
      }
    }
  }
  loadLocalStorage();

  function handleKeyup({ target }: KeyboardEvent) {
    console.log('a');

    if (target instanceof HTMLInputElement) {
      window.UserData = { ...window.UserData, [target.id]: target.value };
      console.log('a');
      window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
  }

  const form = document.querySelector<HTMLElement>('#form');
  form?.addEventListener('keyup', handleKeyup);
}
