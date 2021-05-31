const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateDisplay() {
    articles.forEach((article) => {
        article.style.display = this.value;
    });
}

select.addEventListener('change', updateDisplay);
