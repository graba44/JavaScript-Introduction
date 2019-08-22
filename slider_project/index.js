document.addEventListener('DOMContentLoaded', function(){
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event))
})