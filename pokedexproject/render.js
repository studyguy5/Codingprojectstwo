async function init() {
    await getUrlForPokemon();

};


let detailsAsPokemon = [];
let allPokemon = [];
let resultAsJSON = [];
let UrlPackages = [];

let firstUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';



async function getUrlForPokemon() {
    if(firstUrlset){
    let test = await fetch(firstUrlset);
    let testresult = await test.json();
    getAllPokemon(testresult);
    } else{
        let test2 = await fetch(nextUrlset);
        let testAsJson = await test2.json();
        getAllPokemon(testAsJson);
    }

    console.log(testresult);

};



async function getAllPokemon(testresult, testAsJson) {

    for (let getPokemonIndex = 0; getPokemonIndex < testresult.results.length; getPokemonIndex++) {

        let singelUrl = await fetch(testresult.results[getPokemonIndex].url);
        let singlePokemonInJson = await singelUrl.json();
        allPokemon.push(singlePokemonInJson);

    }
    console.log(allPokemon);
    renderFirstPokemon(allPokemon);
    await getNextPokemonpackage(testresult);

};

async function getNextPokemonpackage(testresult) {
    let nextUrl = testresult.next;

    let nextPackage = await fetch(nextUrl);
    let resultAsJson = await nextPackage.json();
    console.log(resultAsJson);
    let nextUrlset = resultAsJson.next;
    console.log(nextUrlset);


}

//here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
//so it's possible to put a literals within a literals


//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image

//https://willowy-alfajores-643a8c.netlify.app/manifest.json
//https://app-manifest.firebaseapp.com/

//VM im Debugger steht für Virtual Maschine


function renderFirstPokemon(allPokemon) {

    let mainsectioncontent = document.getElementById('main-section-content');
    for (let firstPokemonIndex = 0; firstPokemonIndex < allPokemon.length; firstPokemonIndex++) {

        mainsectioncontent.innerHTML += `
        <div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${firstPokemonIndex + 1}</h4> <h3>${allPokemon[firstPokemonIndex].name}</h3>
        </div>
        <div class="ImageContainer ${allPokemon[firstPokemonIndex]}-Img">
        <img src="${allPokemon[firstPokemonIndex].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[firstPokemonIndex].types[0].type.name}"src="./images/icons/${allPokemon[firstPokemonIndex].types[0].type.name}.svg">
        ${allPokemon[firstPokemonIndex].types[1] ? `<img class="${allPokemon[firstPokemonIndex].types[1].type.name}" src="./images/icons/${allPokemon[firstPokemonIndex].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }
}



function renderNext(detailsAsPokemon, nextPokemonIndex) {

    let mainsectioncontent = document.getElementById('main-section-content');

    for (let nextPokemonIndex2 = 0; nextPokemonIndex2 <= 20; nextPokemonIndex2++) {

        mainsectioncontent.innerHTML += `<div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${nextPokemonIndex2 + 21}</h4> <h3>${detailsAsPokemon[nextPokemonIndex2].name}</h3>
        </div>
        <div class="ImageContainer ${detailsAsPokemon[nextPokemonIndex2].name}-Img">
        <img src="${detailsAsPokemon[nextPokemonIndex2].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${detailsAsPokemon[nextPokemonIndex2].types[0].type.name}"src="./images/icons/${detailsAsPokemon[nextPokemonIndex2].types[0].type.name}.svg">
        ${detailsAsPokemon[nextPokemonIndex2].types[1] ? `<img class="${detailsAsPokemon[nextPokemonIndex2].types[1].type.name}" src="./images/icons/${detailsAsPokemon[nextPokemonIndex2].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    } console.log(detailsAsPokemon);
};








//side note: eine Domain ist nur eine andere schreibweise einer IP-Adresse
//DNS = Domain Name System