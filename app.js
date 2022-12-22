const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener("click", getRandomCats);

randomCatPhoto = (json) => {
    let photo = json[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image);
};

async function getRandomCats() {
    section.innerHTML = ""
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log('JSON:', json);
        return randomCatPhoto(json)
    } catch {e} {
        console.log("This is an error");
        console.log(e);
    } 
    
}

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});

const likeBtn = document.querySelector(".like_btn");
const likeIcon = document.querySelector("#icon");
const count = document.querySelector("#count");


let clicked = false;

var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);  
    }
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent++;
    }else {
        clicked = false;
        likeIcon.innerHTML = `i class="far fa-thumbs-up"></i>`;
        count.textContent--;
    }
  
    
    const dislikeBtn = document.querySelector(".dislike_btn");
    const dislikeIcon = document.querySelector("#icon");
    const add = document.querySelector("#add");


    let reaction = false;


    var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);  
    }
    if(!reaction) {
        reaction = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent++;
    }else {
        reaction = false;
        likeIcon.innerHTML = `i class="far fa-thumbs-up"></i>`;
        count.textContent--;
    }







