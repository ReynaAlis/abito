const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },

    {
        id: 1,
        title: 'Второй товар',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },

    {
        id: 2,
        title: 'Третий товар',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },

    {
        id: 3,
        title: 'Четвертый товар',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },

    {
        id: 4,
        title: 'Пятый товар',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },

    {
        id: 5,
        title: 'Шестой товар',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: '../image/default-image.jpeg'
    },
];

const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a class="content-main__list-item" href="product.html">
                <div class="content-main__list-item--image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                    <h3 class="content-main__list-item--title">${item.title}</h3>
                    <strong class="content-main__list-item--price">${item.price}</strong>
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
            </a>
        `)
    })
};

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value);
    });
};

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})