let allPokemon = [];
// let firstload = true;
let firstLoad = true;
let packageresultAsJson = [];
let currentIndex = 0;//19 before
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
            renderNextPokemon();
        }
}

function renderfilteredArray(filterdArray) {
    let filtercont = document.getElementById('main-section-content')
    filtercont.innerHTML = "";
    for (let filterIndex = 0; filterIndex < filterdArray.length; filterIndex++) {
        filtercont.innerHTML += renderFilteredPokemon(filterIndex);
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
    document.getElementById('buttonId').disabled = false;
    hideLoadingAnimation();
    loadPokemon(allPokemon);
       
}

//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image



function loadPokemon() {
    let mainsectioncontent = document.getElementById('main-section-content');
    for (let currentIndex = 0; currentIndex < currentIndex + 20; currentIndex++) {        //variable- currentStartNumbe is seted in head area, so instead of a number, there is placed a variable in the loop as start
        //also +1 added to the index, because it starts at 0
        mainsectioncontent.innerHTML += renderHtmlForPokemon(currentIndex);
    }
    currentIndex += 20;   // at the end of 20 rounds to the currentStartNumber is added 20, which is the next start
    
};


async function getEvolutionChainFromPokemon() {
    let evoUrl = await fetch(evolutionchainUrlset);
    let evoUrlresponse = await evoUrl.json();
    getAllEvoChains(evoUrlresponse);
};

async function getAllEvoChains(evoUrlresponse) {                         //second fetchstep for names
    for (let index = 0; index < evoUrlresponse.results.length; index++) {
        let nextfetch = await fetch(evoUrlresponse.results[index].url);
        let singleUrlAsJson = await nextfetch.json();
        allEvoChains.push(singleUrlAsJson);
    }
}



//side note: eine Domain ist nur eine andere schreibweise einer IP-Adresse
//DNS = Domain Name System

function showLoadingAnimation() {
    let loadingAnimation = document.getElementById('loadingSpinner')
    loadingAnimation.classList.remove('dont-Show')
};

function hideLoadingAnimation() {
    let toggleCont = document.getElementById('loadingSpinner')
    toggleCont.classList.add('dont-Show')
}
