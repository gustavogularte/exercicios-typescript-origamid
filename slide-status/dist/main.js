import Slide from './Slide.js';
const container = document.querySelector('#slide-container');
const slides = document.querySelectorAll('#slide li');
const controls = document.querySelector('#slide-controls');
if (container && slides && controls) {
    const slide = new Slide(container, Array.from(slides), controls, 2000);
}
//# sourceMappingURL=main.js.map