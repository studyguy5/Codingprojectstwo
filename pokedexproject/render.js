async function init() {
    await getUrlForPokemon();

};


let detailsAsPokemon = [];
let allPokemon = [];
let resultAsJSON = [];
let UrlPackages = [];
let firstload = true;
let firstUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';



async function getUrlForPokemon() {
    
        let test = await fetch(firstUrlset);
        let testresult = await test.json();
        await getAllPokemon(testresult);              // testresult and testAsJson migrate into getAllPokemon, we need only one paramter in getAllPokemon
    

    
    console.log(allPokemon);
};



async function getAllPokemon(testresult) {


        for (let getPokemonIndex = 0; getPokemonIndex < testresult.results.length; getPokemonIndex++) {

            let singelUrl = await fetch(testresult.results[getPokemonIndex].url);
            let singlePokemonInJson = await singelUrl.json();
            allPokemon.push(singlePokemonInJson);
        };
        if(firstload){
            renderFirstPokemon();
            firstload = false;
        };
    
    
    await getNextPokemonpackage(testresult);

};

async function getNextPokemonpackage(testresult) {
    let nextUrl = testresult.next;

    let nextPackage = await fetch(nextUrl);
    let resultAsJson = await nextPackage.json();
    await getAllPokemon(resultAsJson);
    let nextUrlset = resultAsJson.next;
    console.log(nextUrlset);

    //here we get the package Link which contains all 20 Links

}





//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image

//https://willowy-alfajores-643a8c.netlify.app/manifest.json
//https://app-manifest.firebaseapp.com/

//VM im Debugger steht für Virtual Maschine


function renderFirstPokemon() {

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
    }//here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
}//so it's possible to put a literals within a literals



function renderNextPokemon() {
    
        
    let mainsectioncontent = document.getElementById('main-section-content');

    for (let nextPokemonIndex2 = 0; nextPokemonIndex2 <20; nextPokemonIndex2++) {

        mainsectioncontent.innerHTML += `<div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${nextPokemonIndex2 + 21}</h4> <h3>${allPokemon[nextPokemonIndex2].name}</h3>
        </div>
        <div class="ImageContainer ${allPokemon[nextPokemonIndex2].name}-Img">
        <img src="${allPokemon[nextPokemonIndex2].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[nextPokemonIndex2].types[0].type.name}"src="./images/icons/${allPokemon[nextPokemonIndex2].types[0].type.name}.svg">
        ${allPokemon[nextPokemonIndex2].types[1] ? `<img class="${allPokemon[nextPokemonIndex2].types[1].type.name}" src="./images/icons/${allPokemon[nextPokemonIndex2].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    } console.log(allPokemon);
};








//side note: eine Domain ist nur eine andere schreibweise einer IP-Adresse
//DNS = Domain Name System