const BUTTON = document.querySelector(".button");
const LIST = document.querySelector(".content");
const URL = "https://api.thecatapi.com/v1/images/search?limit=20";


async function getImagesAPI(list, url){
  let response = await fetch(url);
  let content = await response.json();

  for(let key in content) {
    list.innerHTML +=`<img src="${content[key].url}" class="image" alt="img">`
  };
};

BUTTON.addEventListener("click", ()=>{
  getImagesAPI(LIST, URL);
  console.log("Сработала кнопка");
})