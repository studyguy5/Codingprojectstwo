let firstfetchArray = [];
let secondfetchArray = [];
let mainDataArrayWord = ["height", "weight", "base_experience", "abilities", "abilities"];
let stats = ['0', '1', '2', '4', '5']//try to put the stats into an array
let ImageResultArray = [];

function overlayWindowdiv(firstPokemonIndex) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = renderOverlayDiv(firstPokemonIndex);
    showMain(firstPokemonIndex, mainDataArrayWord);
};


function skipToNext(firstPokemonIndex) {
    firstPokemonIndex++
    overlayWindowdiv(firstPokemonIndex);
}

function skipToPrevious(firstPokemonIndex) {
    firstPokemonIndex--
    overlayWindowdiv(firstPokemonIndex);
}


function showMain(firstPokemonIndex, mainDataArrayWord) {
    let maincontainer = document.getElementById('pokemondetails')
    for (let mainDataIndex = 0; mainDataIndex < mainDataArrayWord.length; mainDataIndex++) {
        let value3 = allPokemon[firstPokemonIndex][mainDataArrayWord[3]][0].ability.name;
        let value4 = allPokemon[firstPokemonIndex][mainDataArrayWord[4]][1] ? ', ' + allPokemon[firstPokemonIndex][mainDataArrayWord[4]][1].ability.name : "";
        maincontainer.innerHTML += renderMainData(mainDataIndex, firstPokemonIndex, mainDataArrayWord, value3, value4)
    }
};

function showstats(firstPokemonIndex) {
    let textX = (10 + 150) / 2;
    let textY = (25 + 30) / 2;
    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML = "";
    for (let statsIndex = 0; statsIndex < stats.length; statsIndex++) {
        statscontainer.innerHTML += renderStats(firstPokemonIndex, statsIndex, textX, textY)
    }
};

async function showEvochain(firstPokemonIndex) {
    ImageResultArray = [];
    firstfetchArray = [];
    secondfetchArray = [];
    let evoChainAsJson = await getEvoChain(firstPokemonIndex);
    let nameArray = [
        evoChainAsJson.chain.species.name,
        evoChainAsJson.chain.evolves_to[0].species.name,
        evoChainAsJson.chain.evolves_to[0].evolves_to[0] ? evoChainAsJson.chain.evolves_to[0].evolves_to[0].species.name : null
    ]
    let realName = nameArray.filter(name => name !== null);
    await fetchImageOfEvo(realName);
    await showEvoImage(evoChainAsJson, ImageResultArray);
};

async function getEvoChain(firstPokemonIndex) {
    let evoUrl = `https://pokeapi.co/api/v2/pokemon-species/${firstPokemonIndex + 1}/`
    let evoFetch = await fetch(evoUrl);
    let resultAsJson = await evoFetch.json();
    let secondFetch = await fetch(resultAsJson.evolution_chain.url);
    let evoChainAsJson = await secondFetch.json();  //here we have all names of the chain but not the pictures
    return evoChainAsJson;
}

async function fetchImageOfEvo(realName) {
    
    for (let ImageIndex = 0; ImageIndex < realName.length; ImageIndex++) {
        let pokemonImageUrl = `https://pokeapi.co/api/v2/pokemon/${realName[ImageIndex]}/`;
        let fetchEvoImage = await fetch(pokemonImageUrl);
        let ImageResultAsJson = await fetchEvoImage.json();
        ImageResultArray.push(ImageResultAsJson);
    }
}

async function showEvoImage(evoChainAsJson, ImageResultArray) {
    let evocontainer = document.getElementById('pokemondetails')
    evocontainer.innerHTML = renderEvoImage(evoChainAsJson, ImageResultArray)
};

// window.toggleOverlayWindow = toggleOverlayWindow;  von rechts nach links soll die funktion toggleOverlayWindow mit dem Window tag global machen



