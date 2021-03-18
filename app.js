// 1
const portillos = document.getElementById("portillos");

// 2
const images = document.getElementsByTagName('img');

// 3
const centered = document.getElementsByClassName(`center`);


// 4
const ginosEast = document.querySelector("ginos");

// 5
const pTags = document.querySelectorAll(`p`);

// 6a
const h1 = document.querySelector(`h1`);

// 6b
const h1InnerText = h1.innerText;
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// 7a 
const others = document.getElementById("others");

// 7b
document.getElementById("others").innerHTML = "Other favorites";

// 8a
const aTag = document.querySelector(`a`);

// 8b
const aTagHref = aTag.href;
aTag.href = "https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/";

// 9 
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11 a
const h4 = document.createElement(`h4`);

//11b
h4.innerText = `CHICAGO: A great place to eat`;

// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

//12 a
const h5 = document.createElement('h5');

//  12b
h5.innerText = "See you in the Windy City Sometime!";

// 12c
aTag.insertAdjacentElement(`afterend`, h5);


// 13
const li = document.querySelector(`li`);
li.remove();


//BONUS

// 14a
const divs = document.querySelectorAll(`div`);

// 14b
div.classList.add(`background`);



// 15
const hungry = ["Thanks", "A", "Lot", "Now", "I", "Am", "Hungry"];

