class AnimBg {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    listenCursorMove(event) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const posX = clientX - centerX;
        const posY = clientY - centerY;

        this.elements.forEach(element => this.moveElement(element, posX, posY));
    }

    moveElement(element, posX, posY) {
        const ratioX = -element.getAttribute('ratioX');
        const ratioY = -element.getAttribute('ratioY');

        element.style.transform = `translate(${posX * ratioX}px, ${posY * ratioY}px)`;
    }
}