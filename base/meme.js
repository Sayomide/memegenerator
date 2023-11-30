let genBtn = document.querySelector("#genbtn");
let img = document.querySelector("#img");
let author = document.querySelector("#author");
let title = document.querySelector("#title");

genBtn.addEventListener("click", fetchRandomMemes);

async function fetchRandomMemes() {
  const response = await fetch('https://meme-api.com/gimme/wholesomememes');
    const data = await response.json();
      console.log(data)
      img.src = data.url;
    author.textContent = `Authored by -- ${data.author}`;
  title.innerHTML = `Title: ${data.title}`
}
fetchRandomMemes();


