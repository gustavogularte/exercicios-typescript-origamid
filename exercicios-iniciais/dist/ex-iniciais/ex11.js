export function ex11() {
    function validJSON(value) {
        try {
            JSON.parse(value);
            return true;
        }
        catch {
            return false;
        }
    }
    function isUserData(value) {
        if (value &&
            typeof value === 'object' &&
            ('nome' in value || 'email' in value || 'cpf' in value)) {
            return true;
        }
        else {
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
    function handleKeyup({ target }) {
        console.log('a');
        if (target instanceof HTMLInputElement) {
            window.UserData = { ...window.UserData, [target.id]: target.value };
            console.log('a');
            window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
        }
    }
    const form = document.querySelector('#form');
    form?.addEventListener('keyup', handleKeyup);
}
//# sourceMappingURL=ex11.js.map