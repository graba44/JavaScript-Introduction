document.addEventListener('DOMContentLoaded', function() {
    const animBg = new AnimBg('.anim-bg');

    document.addEventListener('mousemove', (event) => animBg.listenCursorMove(event));
})