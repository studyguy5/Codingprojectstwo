let allPokemon = [];
let firstload = true;
let firstLoad = true;
let packageresultAsJson = [];
let currentStartNumber = 20;
let offset = 20;
let limit = 20;

async function init() {
    await getUrlForPokemon();
    
};


let firstUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
let secondUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=20';


async function getUrlForPokemon() {
    let fetchFirstPackage = await fetch(firstUrlset);            //fetch the Url Package
    let packageresultAsJson = await fetchFirstPackage.json();       //transform into json
    await getAllPokemon(packageresultAsJson);              // testresult and testAsJson migrate into getAllPokemon, we need only one paramter in getAllPokemon
    console.log(packageresultAsJson);


    console.log(allPokemon);
};


async function getNextUrlSet() {
    if(offset > 1299){
        limit =2 
    }else{
        let fetchNextPackage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);            //fetch the Url Package ich muss das hier dynamisch machen
        let nextUrlAsJson = await fetchNextPackage.json();              //transform into json
        //let nextUrlContainer = UrlAsJson.next;                  //next Url here offset 20 limit 40
        getAllPokemon(nextUrlAsJson);
        offset += 20;}     
}

async function getAllPokemon(packageresultAsJson) {     //here we fetch each single Url of the package
    for (let getPokemonIndex = 0; getPokemonIndex < packageresultAsJson.results.length; getPokemonIndex++) {

        let singelUrl = await fetch(packageresultAsJson.results[getPokemonIndex].url);
        let singlePokemonInJson = await singelUrl.json();
        allPokemon.push(singlePokemonInJson);
    };
    if (firstload) {
        renderFirstPokemon();
        firstload = false;
    } else {
        renderNextPokemon(allPokemon);   
    }
}

//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image

//https://willowy-alfajores-643a8c.netlify.app/manifest.json
//https://app-manifest.firebaseapp.com/

//VM im Debugger steht für Virtual Maschine


function renderFirstPokemon() {
    let mainsectioncontent = document.getElementById('main-section-content');
    for (let firstPokemonIndex = 0; firstPokemonIndex < 20; firstPokemonIndex++) {

        mainsectioncontent.innerHTML += `
        <div onclick="overlayWindowdiv(${firstPokemonIndex}); toggleOverlayWindow()" class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${firstPokemonIndex + 1}</h4> <h3>${allPokemon[firstPokemonIndex].name}</h3>
        </div>
        <div class="ImageContainer ${allPokemon[firstPokemonIndex].types[0].type.name}-Img">
        <img src="${allPokemon[firstPokemonIndex].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[firstPokemonIndex].types[0].type.name}"src="./images/icons/${allPokemon[firstPokemonIndex].types[0].type.name}.svg">
        ${allPokemon[firstPokemonIndex].types[1] ? `<img class="${allPokemon[firstPokemonIndex].types[1].type.name}" src="./images/icons/${allPokemon[firstPokemonIndex].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }//here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
};//so it's possible to put a literals within a literals



function renderNextPokemon(allPokemon) {
    let mainsectioncontent = document.getElementById('main-section-content');
    //for (let index = 20; index < resultAsJson.length; index+=20) {

    for (let i = currentStartNumber; i < currentStartNumber + 20; i++) {        //variable- currentStartNumbe is seted in head area, so instead of a number, there is placed a variable in the loop as start
                                                                                //also +1 added to the index, because it starts at 0
        mainsectioncontent.innerHTML += `<div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${i+1}</h4> <h3>${allPokemon[i].name}</h3>                         
        </div>
        <div class="ImageContainer ${allPokemon[i].types[0].type.name}-Img">
        <img src="${allPokemon[i].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[i].types[0].type.name}"src="./images/icons/${allPokemon[i].types[0].type.name}.svg">
        ${allPokemon[i].types[1] ? `<img class="${allPokemon[i].types[1].type.name}" src="./images/icons/${allPokemon[i].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }
    currentStartNumber += 20;   // at the end of 20 rounds to the currentStartNumber is added 20, which is the next start
    console.log(allPokemon);
};


//side note: eine Domain ist nur eine andere schreibweise einer IP-Adresse
//DNS = Domain Name System