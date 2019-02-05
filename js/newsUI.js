class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    addNews(news) {
        console.time();
        const template = NewsUI.newsTemplate(news, this.newsContainer);
        this.newsContainer.insertAdjacentHTML("afterbegin", template);  //работает быстрее
        //this.newsContainer.appendChild(NewsUI.newsInDOM(news));  //работает медленнее
        console.timeEnd();
    }

    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    showAlert() {
        this.newsContainer.insertAdjacentHTML("afterbegin", 
        `<div class="not_found">
            News not found
        </div>`);
    }

    static newsTemplate(news) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>

                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    static newsInDOM(news) {
        let divCol = document.createElement('div');
        divCol.classList.add('col', 's12', 'm6');

        let divCard = document.createElement('div');
        divCard.classList.add('card');
        divCol.appendChild(divCard);

        let divCardImage = document.createElement('div');
        divCardImage.classList.add('card-image');
        divCard.appendChild(divCardImage);

        let img = document.createElement('img');
        img.setAttribute('src', news.urlToImage);
        divCardImage.appendChild(img);

        let divCardContent = document.createElement('div');
        divCardContent.classList.add('card-content');
        divCard.appendChild(divCardContent);

        let span = document.createElement('span');
        span.classList.add('card-title');
        span.appendChild(document.createTextNode(news.title || ''));
        divCardContent.appendChild(span);

        let p = document.createElement('p');
        p.appendChild(document.createTextNode(news.title || ''));
        divCardContent.appendChild(p);

        let divCardAction = document.createElement('div');
        divCardAction.classList.add('card-action');
        divCard.appendChild(divCardAction);

        let a = document.createElement('a');
        a.setAttribute('target','_blank');
        a.setAttribute('href', news.url);
        a.appendChild(document.createTextNode("Read more"));
        divCardAction.appendChild(a);

        return divCol;
    }
}