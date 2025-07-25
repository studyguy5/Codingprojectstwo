function renderHtmlFirstPokemon(firstPokemonIndex){
    return `
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
        //here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
        //so it's possible to put a literals within a literals
}

function renderHtmlForAllNextPokemon(cs){
    return `
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

function renderOverlayDiv(firstPokemonIndex){
    return `<div  class="pokemonNameOverlay">
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
}

function renderMainData(mainDataIndex, firstPokemonIndex, mainDataArrayWord, value3, value4){
return `
    <table>
    <tr>
        <td><h3>${mainDataIndex === 4 ? "" : mainDataArrayWord[mainDataIndex]}</h3></td>
        <td><h3>${mainDataIndex === 3 ? value3  +  value4 
            : mainDataIndex === 4 ? "" : allPokemon[firstPokemonIndex][mainDataArrayWord[mainDataIndex]]}</h3></td>
    </tr>
    </table>
    `
}

function renderStats(firstPokemonIndex, statsIndex, textX, textY){
    return `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[statsIndex].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[firstPokemonIndex].stats[statsIndex].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${allPokemon[firstPokemonIndex].stats[statsIndex].base_stat}
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