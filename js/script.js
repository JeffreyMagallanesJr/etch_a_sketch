const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        div.style.flex = `0 0 ${(500 - (2 * 16)) / 16}px`;

        container.appendChild(div);
    }
}