let allPokemon = [];
let firstLoad = true;
let packageresultAsJson = [];
let currentIndex = 0;
let offset = 20;    
let limit = 20;     
let allEvoChains = [];
let firstUrlset = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

async function init() {
    await getUrlForPokemon();
};

async function filterArray() {
    let connection = document.getElementById('filterinput').value.toLowerCase();
    if (connection.length > 2) {
        let filterdArray = allPokemon.filter(allPokemon => allPokemon.name.toLowerCase().includes(connection))
        renderFilteredArray(filterdArray);
    } else
        if (connection.length < 3) {
            alert('min 3 letters'); 
        }
        document.getElementById('buttonId').style.display="none";
}

async function ClearFilter(allPokemon) {
    let connection = document.getElementById('filterinput').value.toLowerCase();
    if (connection.length === 0) {
        currentIndex = 0;
       let filterCont = document.getElementById('main-section-content')
        filterCont.innerHTML = "";
       for (let i = currentIndex; i < allPokemon.length; i++) {
        filterCont.innerHTML += renderHtmlForPokemon(i);
    }  
    } else{}
    document.getElementById('buttonId').style.display="flex";
    
};

function renderFilteredArray(filterdArray) {
    let filterCont = document.getElementById('main-section-content')
    filterCont.innerHTML = "";
    for (let filterIndex = 0; filterIndex < filterdArray.length; filterIndex++) {
        filterCont.innerHTML += renderHtmlFilteredPokemon(filterdArray, filterIndex);
    }
}

function toggleOverlayWrapper() {
    let Overlay = document.getElementById('Overlaywrapper')
    Overlay.classList.toggle('dont_show')
};

function stopProp(event) {
    event.stopPropagation();
}

async function getUrlForPokemon() {
    showLoadingAnimation();
    let fetchFirstPackage = await fetch(firstUrlset);            
    let packageresultAsJson = await fetchFirstPackage.json();    
    await getAllPokemon(packageresultAsJson);              
};

async function getNextUrlSet() {
    document.getElementById('buttonId').disabled = true;
    showLoadingAnimation();
    if (offset > 1299) {
        let fetchNextPackage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=2`);            
        let nextUrlAsJson = await fetchNextPackage.json();              
        getAllPokemon(nextUrlAsJson);
    } else {
        let fetchNextPackage = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);            
        let nextUrlAsJson = await fetchNextPackage.json();              
        getAllPokemon(nextUrlAsJson);
        offset += 20;
    }
}

async function getAllPokemon(packageresultAsJson) {     
    for (let getPokemonIndex = 0; getPokemonIndex < packageresultAsJson.results.length; getPokemonIndex++) {
        let singelUrl = await fetch(packageresultAsJson.results[getPokemonIndex].url);
        let singlePokemonInJson = await singelUrl.json();
        allPokemon.push(singlePokemonInJson);
    };
    document.getElementById('buttonId').disabled = false;
    hideLoadingAnimation();
    loadPokemon(allPokemon);

}

function loadPokemon() {
    let mainSectionContent = document.getElementById('main-section-content');
    for (let i = currentIndex; i < currentIndex + 20; i++) {        
        
        mainSectionContent.innerHTML += renderHtmlForPokemon(i);
    }
    currentIndex += 20;   
    
};

function showLoadingAnimation() {
    let loadingAnimation = document.getElementById('loadingSpinner')
    loadingAnimation.classList.remove('dont-Show')
};

function hideLoadingAnimation() {
    let hideAnimation = document.getElementById('loadingSpinner')
    hideAnimation.classList.add('dont-Show')
}
