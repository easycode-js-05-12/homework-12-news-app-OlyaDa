const newsService = new NewsService();
const newsUI = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const search = form['search'];


function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => newsUI.addNews(news));
    }, category, country);
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
search.addEventListener('keyup', function(event) {
    const searchString = search.value.trim(); //trim() удаляет пробельные символы с начала и конца строки
    if (searchString.length > 2) {
        newsService.searchNews((response) => {
            console.log(response);
            newsUI.clearContainer();
            if (response.totalResults === 0) {
                newsUI.showAlert();
                return;
            }
            const { articles } = response;
            articles.forEach((news) => newsUI.addNews(news));
        }, searchString);
    } 
});