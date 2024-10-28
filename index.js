const button = document.querySelector(".button");
const list = document.querySelector(".content");
const url = "https://api.thecatapi.com/v1/images/search?limit=20";


async function getImagesAPI(list, url){
  const response = await fetch(url);
  const content = await response.json();

  for(let key in content) {
    list.innerHTML +=`<img src="${content[key].url}" class="image" alt="img">`
  };
};

button.addEventListener("click", ()=>{
  getImagesAPI(list, url);
})