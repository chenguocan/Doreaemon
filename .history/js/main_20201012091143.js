import string from "./css.js"
const player = {
    id: undefined,
    time: 1000,
    n: 1,
    init: () => {
        demo.innerText = string.substr(0, player.n);
        demo2.innerHtml = string.substr(0, player.n);
        player.play();
    },
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHtml = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
        console.log(player.ui.demo.scrollHeight);
    },
    play: () => {
        player.id = setInterval(player.run, player.time);
    }

}
player.init();