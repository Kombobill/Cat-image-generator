const url = "https://api/cats?tags=tag1,tag2&skip=0&limit=10/search"
const section = document.querySelector('.container')
const button = document.querySelector('.btn')

button.addEventListener('click', getRandomCats);

randomCatPhoto = (json) => {
    let photo = json[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image);
};

async function 