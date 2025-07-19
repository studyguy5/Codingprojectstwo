let allPokemon = [];
let firstload = true;
let firstLoad = true;
let packageresultAsJson = [];
let currentStartNumber = 19;
let offset = 20;
let limit = 20;
let evoOffset = 10;
let evoLimit = 10;
let allEvoChains = [];

async function init() {
    await getUrlForPokemon();
    getEvolutionChainFromPokemon();
};

async function filterArray() {
    let connection = document.getElementById('filterinput').value.toLowerCase();
    if (connection.length > 2) {
        let filterdArray = allPokemon.filter(allPokemon => allPokemon.name.toLowerCase().includes(connection))
        renderfilteredArray(filterdArray);
        console.log(filterdArray);
    } else
        if (connection.length < 3) {
            renderFirstPokemon(); 
        }
}

function renderfilteredArray(filterdArray) {
    let filtercont = document.getElementById('main-section-content')
    filtercont.innerHTML = "";
    for (let filterIndex = 0; filterIndex < filterdArray.length; filterIndex++) {
        filtercont.innerHTML += `
        <div onclick="overlayWindowdiv(${filterIndex}); toggleOverlayWrapper(${filterIndex})" class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${filterIndex + 1}</h4> <h3>${filterdArray[filterIndex].name}</h3>
        </div>
        <div class="ImageContainer ${filterdArray[filterIndex].types[0].type.name}-Img">
        <img src="${filterdArray[filterIndex].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${filterdArray[filterIndex].types[0].type.name}"src="./images/icons/${filterdArray[filterIndex].types[0].type.name}.svg">
        ${filterdArray[filterIndex].types[1] ? `<img class="${filterdArray[filterIndex].types[1].type.name}" src="./images/icons/${filterdArray[filterIndex].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }
}

function toggleOverlayWrapper() {
    let Overlay = document.getElementById('Overlaywrapper')
    Overlay.classList.toggle('dont_show')
};

function stopProp(event) {
    event.stopPropagation();
}

let firstUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
let evolutionchainUrlset = 'https://pokeapi.co/api/v2/evolution-chain?limit=10&offset=0';


async function getUrlForPokemon() {
    showLoadingAnimation();
    let fetchFirstPackage = await fetch(firstUrlset);            //fetch the Url Package
    let packageresultAsJson = await fetchFirstPackage.json();       //transform into json
    await getAllPokemon(packageresultAsJson);              // testresult and testAsJson migrate into getAllPokemon, we need only one paramter in getAllPokemon
};

async function getNextUrlSet() {
    document.getElementById('buttonId').disabled = true;
    showLoadingAnimation();
    if (offset > 1299) {
        let fetchNextPackage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=2`);            //fetch the Url Package ich muss das hier dynamisch machen
        let nextUrlAsJson = await fetchNextPackage.json();              //transform into json
                          //next Url here offset 20 limit 40
        getAllPokemon(nextUrlAsJson);
    } else {
        let fetchNextPackage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);            //fetch the Url Package ich muss das hier dynamisch machen
        let nextUrlAsJson = await fetchNextPackage.json();              //transform into json
                          //next Url here offset 20 limit 40
        getAllPokemon(nextUrlAsJson);
        offset += 20;
    }
}

async function getAllPokemon(packageresultAsJson) {     //here we fetch each single Url of the package
    for (let getPokemonIndex = 0; getPokemonIndex < packageresultAsJson.results.length; getPokemonIndex++) {
        let singelUrl = await fetch(packageresultAsJson.results[getPokemonIndex].url);
        let singlePokemonInJson = await singelUrl.json();
        allPokemon.push(singlePokemonInJson);
    };
    if (firstload) {
        hidetoggleAnimation();
        renderFirstPokemon();
        document.getElementById('buttonId').disabled = false;
        firstload = false;
    } else {
        hidetoggleAnimation();
        renderNextPokemon(allPokemon);
        document.getElementById('buttonId').disabled = false;
    }
}

//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image

//https://willowy-alfajores-643a8c.netlify.app/manifest.json
//https://app-manifest.firebaseapp.com/

//VM im Debugger steht für Virtual Maschine


function renderFirstPokemon() {
    let mainsectioncontent = document.getElementById('main-section-content');
    mainsectioncontent.innerHTML = "";
    for (let firstPokemonIndex = 0; firstPokemonIndex < 19; firstPokemonIndex++) {
        mainsectioncontent.innerHTML += `
        <div onclick="overlayWindowdiv(${firstPokemonIndex}); toggleOverlayWrapper(${firstPokemonIndex})" class="pokemoncontainer">
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
    }
  //here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
};//so it's possible to put a literals within a literals

function renderNextPokemon(allPokemon) {
    let mainsectioncontent = document.getElementById('main-section-content');
    for (let cs = currentStartNumber; cs < currentStartNumber + 20; cs++) {        //variable- currentStartNumbe is seted in head area, so instead of a number, there is placed a variable in the loop as start
        //also +1 added to the index, because it starts at 0
        mainsectioncontent.innerHTML += `
        <div onclick="NextoverlayWindowdiv(${cs}); toggleOverlayWrapper(${cs})" class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${cs + 1}</h4> <h3>${allPokemon[cs].name}</h3>                         
        </div>
        <div class="ImageContainer ${allPokemon[cs].types[0].type.name}-Img">
        <img src="${allPokemon[cs].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[cs].types[0].type.name}"src="./images/icons/${allPokemon[cs].types[0].type.name}.svg">
        ${allPokemon[cs].types[1] ? `<img class="${allPokemon[cs].types[1].type.name}" src="./images/icons/${allPokemon[cs].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }
    currentStartNumber += 20;   // at the end of 20 rounds to the currentStartNumber is added 20, which is the next start
    // getNextEvolutionChainFromPokemon();
    console.log(allPokemon);
};

async function getEvolutionChainFromPokemon() {
    let evoUrl = await fetch(evolutionchainUrlset);
    let evoUrlresponse = await evoUrl.json();
    console.log(evoUrlresponse);
    getAllEvoChains(evoUrlresponse);
};

async function getAllEvoChains(evoUrlresponse) {                         //second fetchstep for names
    for (let index = 0; index < evoUrlresponse.results.length; index++) {
        let nextfetch = await fetch(evoUrlresponse.results[index].url);
        let singleUrlAsJson = await nextfetch.json();
        console.log(singleUrlAsJson);
        allEvoChains.push(singleUrlAsJson);
    }
}



//side note: eine Domain ist nur eine andere schreibweise einer IP-Adresse
//DNS = Domain Name System

function showLoadingAnimation() {
    let loadingAnimation = document.getElementById('loadingSpinner')
    loadingAnimation.classList.remove('dont-Show')
};

function hidetoggleAnimation() {
    let toggleCont = document.getElementById('loadingSpinner')
    toggleCont.classList.add('dont-Show')
}
