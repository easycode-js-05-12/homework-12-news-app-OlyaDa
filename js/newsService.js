const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        //this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.apiKey = '975e50700a82494a8d991825a906cb83';
        this.country = 'ua';
        this.category = 'technology';
    }

    /**
     * Get all news
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

    /**
     * search news
     */
    searchNews(callback, q) {
        http.get(`${this.apiUrl}/everything?q=${q}&apiKey=${this.apiKey}`, callback);
    }
}