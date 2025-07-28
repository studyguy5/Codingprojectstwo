

function renderHtmlForPokemon(currentIndex){
    return `
        <div onclick="overlayWindowdiv(${currentIndex}); toggleOverlayWrapper(${currentIndex})" class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${currentIndex + 1}</h4> <h3>${allPokemon[currentIndex].name}</h3>                         
        </div>
        <div class="ImageContainer ${allPokemon[currentIndex].types[0].type.name}-Img">
        <img src="${allPokemon[currentIndex].sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${allPokemon[currentIndex].types[0].type.name}"src="./images/icons/${allPokemon[currentIndex].types[0].type.name}.svg">
        ${allPokemon[currentIndex].types[1] ? `<img class="${allPokemon[currentIndex].types[1].type.name}" src="./images/icons/${allPokemon[currentIndex].types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
}

function renderFilteredPokemon(filterIndex){
    return `
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

function renderOverlayDiv(currentIndex){
    return `<div  class="pokemonNameOverlay">
    <h4>#${currentIndex + 1}</h4><div class="buttonfield"><img onclick="skipToPrevious(${currentIndex})"; class="skipToPrevious" id="skiptoprevious" src="./images/icons/skipToPrevious.png">
    <h3>${allPokemon[currentIndex].name}</h3><img onclick="skipToNext(${currentIndex})"; class="skipToNext" id="skiptonext" src="./images/icons/skipToNext.png"></div><img onclick="toggleOverlayWrapper(${currentIndex})" class="CloseButton" src="./images/img/close_button.png">
    </div>
    <div class="ImageContainerOverlay ${allPokemon[currentIndex].types[0].type.name}-Img">
    <img src="${allPokemon[currentIndex].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4 onclick="showMain(${currentIndex})" >main</h4><hr><h4 onclick="showstats(${currentIndex})">stats</h4><hr><h4 onclick="showEvochain(${currentIndex})">evo-chain</h4>
    </div>
    <div class="pokemondetails" id="pokemondetails">
    </div>
   `
}

function renderMainData(mainDataIndex, currentIndex, mainDataArrayWord, value3, value4){
    console.log('renderMainData mit Index firstPokemonIndex')
return `
    <table>
    <tr>
        <td><h3>${mainDataIndex === 4 ? "" : mainDataArrayWord[mainDataIndex]}</h3></td>
        <td><h3>${mainDataIndex === 3 ? value3  +  value4 : mainDataIndex === 4 ? "" : allPokemon[currentIndex][mainDataArrayWord[mainDataIndex]]}</h3></td>
    </tr>
    </table>
    `
}


function renderStats(currentIndex, statsIndex, textX, textY){
    return `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[currentIndex].stats[statsIndex].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[currentIndex].stats[statsIndex].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[currentIndex].stats[statsIndex].base_stat}
  </text>
        </svg></td>
    </tr>
    </table>`
}

function renderEvoImage(evoChainAsJson, ImageResultArray){
    return `
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
    </table>`
}