let firstfetchArray = [];
let secondfetchArray = [];
let mainDataArrayWord = ["height", "weight", "base_experience", "abilities", "abilities"];




function overlayWindowdiv(firstPokemonIndex) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div  class="pokemonNameOverlay">
    <h4>#${firstPokemonIndex + 1}</h4><div class="buttonfield"><img onclick="skipToPrevious(${firstPokemonIndex})"; class="skipToPrevious" id="skiptoprevious" src="./images/icons/skipToPrevious.png"><h3>${allPokemon[firstPokemonIndex].name}</h3><img onclick="skipToNext(${firstPokemonIndex})"; class="skipToNext" id="skiptonext" src="./images/icons/skipToNext.png"></div><img onclick="toggleOverlayWrapper(${firstPokemonIndex})" class="CloseButton" src="./images/img/close_button.png">
    </div>
    <div class="ImageContainerOverlay ${allPokemon[firstPokemonIndex].types[0].type.name}-Img">
    <img src="${allPokemon[firstPokemonIndex].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4 onclick="showMain(${firstPokemonIndex})" >main</h4><hr><h4 onclick="showstats(${firstPokemonIndex})">stats</h4><hr><h4 onclick="showEvochain(${firstPokemonIndex})">evo-chain</h4>
    </div>
    <div class="pokemondetails" id="pokemondetails">
    </div>
   `
    showMain(firstPokemonIndex, mainDataArrayWord);
};


function skipToNext(firstPokemonIndex){
    firstPokemonIndex++
    overlayWindowdiv(firstPokemonIndex);
}

function skipToPrevious(firstPokemonIndex){
    firstPokemonIndex--
    overlayWindowdiv(firstPokemonIndex);
}




function showMain(firstPokemonIndex, mainDataArrayWord) {
    let maincontainer = document.getElementById('pokemondetails')
    for (let mainDataIndex = 0; mainDataIndex < mainDataArrayWord.length; mainDataIndex++) {
    let value3 = allPokemon[firstPokemonIndex][mainDataArrayWord[3]][0].ability.name;
    let value4 = allPokemon[firstPokemonIndex][mainDataArrayWord[4]][1] ? ', ' + allPokemon[firstPokemonIndex][mainDataArrayWord[4]][1].ability.name : "";
    maincontainer.innerHTML += renderMainData(mainDataIndex, firstPokemonIndex, mainDataArrayWord, value3, value4) }
};   

function showstats(firstPokemonIndex) {
    let textX = (10 + 150) / 2;
    let textY = (25 + 30) / 2;

    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML = `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[0].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[0].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[0].base_stat}
  </text>
        </svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[1].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[1].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[1].base_stat}
  </text></svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[2].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[2].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[2].base_stat}
  </text></svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[3].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[3].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[3].base_stat}
  </text></svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[4].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[4].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[4].base_stat}
  </text></svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[5].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[5].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[5].base_stat}
  </text></svg></td>
    </tr>
    </div>
    `
}

let ImageResultArray = [];

async function showEvochain(firstPokemonIndex) {
    ImageResultArray = [];
    firstfetchArray = [];
    secondfetchArray = [];
    
    let evoUrl = `https://pokeapi.co/api/v2/pokemon-species/${firstPokemonIndex + 1}/`

    let evoFetch = await fetch(evoUrl);
    let resultAsJson = await evoFetch.json();
    console.log(resultAsJson);

    let secondFetch = await fetch(resultAsJson.evolution_chain.url);
    let evoChainAsJson = await secondFetch.json();
    console.log(evoChainAsJson); //here we have all names of the chain but not the pictures

    let nameArray = [
        evoChainAsJson.chain.species.name,
        evoChainAsJson.chain.evolves_to[0].species.name,
        evoChainAsJson.chain.evolves_to[0].evolves_to[0] ? evoChainAsJson.chain.evolves_to[0].evolves_to[0].species.name : null
    ]
    
    let realName = nameArray.filter(name => name !== null);

        for (let ImageIndex = 0; ImageIndex < realName.length; ImageIndex++) {
            let pokemonImageUrl = `https://pokeapi.co/api/v2/pokemon/${realName[ImageIndex]}/`;
            let fetchEvoImage = await fetch(pokemonImageUrl);
            let ImageResultAsJson = await fetchEvoImage.json();
            ImageResultArray.push(ImageResultAsJson);   
        }
 await showEvoImage(evoChainAsJson, ImageResultArray);
};


async function showEvoImage(evoChainAsJson, ImageResultArray) {
    let evocontainer = document.getElementById('pokemondetails')
    evocontainer.innerHTML = `
    <table>
    <tr>
        <td><img class="pokeImg"src="${ImageResultArray[0].sprites['front_default']}"></td>
        <td><img class="arrowImage" src="./images/img/arrow-blue.png"></td>
        <td><img class="pokeImg" src="${ImageResultArray[1].sprites['front_default']}"</td>
        <td>${ImageResultArray[2] ? '<img class="arrowImage" src="./images/img/arrow-blue.png">' : ''}</td>
        <td><img class="pokeImg" src="${ImageResultArray[2] ? ImageResultArray[2].sprites['front_default'] : ''}"</td>
    <tr>
    <tr>
        <td>${evoChainAsJson.chain.species.name}</td> 
        <td></td>
        <td>${evoChainAsJson.chain.evolves_to[0].species.name}</td>
        <td></td>
        ${evoChainAsJson.chain.evolves_to[0].evolves_to[0] ? `<td>${evoChainAsJson.chain.evolves_to[0].evolves_to[0].species.name}</td>` : ''}
    </tr>
    </table>`;
};

// window.toggleOverlayWindow = toggleOverlayWindow;  von rechts nach links soll die funktion toggleOverlayWindow mit dem Window tag global machen



