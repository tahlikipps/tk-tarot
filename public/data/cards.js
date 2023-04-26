
const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/data.json"
fetch(url)
.then(response => response.json())
.then((data) => {
  console.log(data.cards)
  cards = data.cards
})
