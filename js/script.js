const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.style.flex = `1 0 ${(500) / 16}px`;

        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black';
        })

        container.appendChild(div);
    }
}