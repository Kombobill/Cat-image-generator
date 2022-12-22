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


const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
   
    if (activeBtn === 'dislike'){
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }
 
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };










