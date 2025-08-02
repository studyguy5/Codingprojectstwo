let firstfetchArray = [];
let secondfetchArray = [];
let mainDataArrayWord = ["height", "weight", "base_experience", "abilities", "abilities"];
let stats = ['0', '1', '2', '4', '5']
let ImageResultArray = [];
let firstfetch = true;

function overlayWindowDiv(i) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = renderOverlayDiv(i);
    showMain(i, mainDataArrayWord);
};

function skipToNext(i) {
    i++
    if(i > allPokemon.length-1){
    i = 0
    }else{
    }    
    overlayWindowDiv(i);
}

function skipToPrevious(i) {
    i--
    if(i === -1){
    i = allPokemon.length-1
    }
    overlayWindowDiv(i);
}

function showMain(i) {
    let mainContainer = document.getElementById('pokemondetails')
    mainContainer.innerHTML = "";
    for (let mainDataIndex = 0; mainDataIndex < mainDataArrayWord.length; mainDataIndex++) {
        let ability3 = allPokemon[i][mainDataArrayWord[3]][0].ability.name;
        let ability4 = allPokemon[i][mainDataArrayWord[4]][1] ? ', ' + allPokemon[i][mainDataArrayWord[4]][1].ability.name : "";
        mainContainer.innerHTML += renderMainData(mainDataIndex, i, mainDataArrayWord, ability3, ability4)
    }
};

function showstats(i) {
    let textXaxis = (10 + 150) / 2;
    let textYaxis = (25 + 30) / 2;
    let statsContainer = document.getElementById('pokemondetails')
    statsContainer.innerHTML = "";
    for (let statsIndex = 0; statsIndex < stats.length; statsIndex++) {
        statsContainer.innerHTML += renderStats(i, statsIndex, textXaxis, textYaxis)
    }
};

async function showEvochain(i) {
    ImageResultArray = [];
    firstfetchArray = [];
    secondfetchArray = [];
    let evoChainAsJson = await getEvoChain(i);
    let nameArray = [
        evoChainAsJson.chain.species.name,
        evoChainAsJson.chain.evolves_to[0].species.name,
        evoChainAsJson.chain.evolves_to[0].evolves_to[0] ? evoChainAsJson.chain.evolves_to[0].evolves_to[0].species.name : null
    ]
    let realName = nameArray.filter(name => name !== null);
    await fetchImageOfEvo(realName);
    await showEvoImage(evoChainAsJson, ImageResultArray);
};

async function getEvoChain(i) {

    let evoUrl = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`
    let evoFetch = await fetch(evoUrl);
    let resultAsJson = await evoFetch.json();
    let secondFetch = await fetch(resultAsJson.evolution_chain.url);
    let evoChainAsJson = await secondFetch.json();  
    firstfetch = false;
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




