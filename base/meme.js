async function fetchRandomMemes() {
  const response = await fetch('https://meme-api.com/gimme/wholesomememes');
    const data = await response.json();
  console.log(data)
}
fetchRandomMemes();
