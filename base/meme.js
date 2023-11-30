let genBtn = document.querySelector("#genbtn");
let img = document.querySelector("#img");
let author = document.querySelector("#author");

genBtn.addEventListener("click", fetchRandomMemes);

async function fetchRandomMemes() {
  const response = await fetch('https://meme-api.com/gimme/wholesomememes');
    const data = await response.json();
  // console.log(data)
  img.src = data.url;
  author.innerHtml = data.author;
}
//fetchRandomMemes();
/*
npx tailwindcss -i ./dist/meme.css -o ./base/input.css --watch
*/


