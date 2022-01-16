const btnClickCount = document.getElementById('btn-click-count');
let count = 0;

window.onload = () => {
    btnClickCount.addEventListener('click', () => {
        count += 1;
        document.getElementById('score-click-count').innerHTML = count;
    });
}
                                                                