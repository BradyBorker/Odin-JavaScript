function removeMenu(body) {
    body.removeChild(document.querySelector('.game-menu-container'))
    body.classList.remove('menu-background');
}

export default function displayMenu(human, computer) {
    if (!document.querySelector('.game-menu-container')) {
        const gameMenuContainer = document.createElement('div');
        gameMenuContainer.classList.add('game-menu-container');
        const gameTitleContainer = document.createElement('div');
        gameTitleContainer.classList.add('game-title-container');
        gameTitleContainer.textContent = 'BATTLESHIP'

        const gameModeContainer = document.createElement('div');
        const pvpModeBtn = document.createElement('button');
        pvpModeBtn.textContent = 'Player vs. Player';
        const pvcModeBtn = document.createElement('button');
        pvcModeBtn.textContent = 'Player vs. Computer';
        gameModeContainer.appendChild(pvpModeBtn);
        gameModeContainer.appendChild(pvcModeBtn);

        gameModeContainer.classList.add('game-mode-container');

        gameMenuContainer.appendChild(gameTitleContainer);
        gameMenuContainer.appendChild(gameModeContainer)

        const body = document.querySelector('body');
        body.classList.add('menu-background');
        body.appendChild(gameMenuContainer);

        return new Promise((resolve) => {
            pvpModeBtn.addEventListener('click', () => {
                removeMenu(body)
                resolve([human(true), human()]);
            })

            pvcModeBtn.addEventListener('click', () => {
                removeMenu(body)
                resolve([human(true), computer()]);
            })
        })
    }
    return true
}