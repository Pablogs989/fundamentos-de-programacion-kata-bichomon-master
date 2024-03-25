console.log(document.title);
let val;
val = document.querySelector('.infocard');
console.log(val);
let h2 = document.getElementById('gen-1');
h2.innerText = "Generasión 1 Pokimon";

const color = document.querySelectorAll('.infocard-list');
//console.log(color);
const cards = color[0].querySelectorAll(".infocard")
//console.log(color[0].querySelectorAll(".infocard"));
cards.forEach(card => {
    card.style.backgroundColor = 'red';
});


console.log(document.location.href);

console.log(document.location.hostname);

const imgs = document.getElementsByTagName('img')
console.log(imgs);

for (const img of imgs) {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}


console.log("--------7--------");

const flying =  document.querySelectorAll('.flying');
console.log(flying);
for (let i = 0; i < flying.length; i++) {
    flying[i].parentNode.parentNode.style.backgroundColor = 'blue'
}