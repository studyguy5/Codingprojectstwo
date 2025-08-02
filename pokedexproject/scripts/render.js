

function renderHtmlForPokemon(i) {
    return `
        <div onclick="overlayWindowDiv(${i}); toggleOverlayWrapper(${i})" class="pokemoncontainer">
            <div class="pokemonName">
                <h4>#${i + 1}</h4><h3>${allPokemon[i].name.charAt().toUpperCase()+allPokemon[i].name.slice(1)}</h3>                         
            </div>
            <div class="ImageContainer ${allPokemon[i].types[0].type.name}-Img">
                <img src="${allPokemon[i].sprites.other.dream_world['front_default']}">
            </div>
            <div class="type-button-area">
                <img class="${allPokemon[i].types[0].type.name}"src="./images/icons/${allPokemon[i].types[0].type.name}.svg">
            ${allPokemon[i].types[1] ? `<img class="${allPokemon[i].types[1].type.name}" src="./images/icons/${allPokemon[i].types[1].type.name}.svg">` : ''}   
            </div>
        </div>`
}

function renderHtmlFilteredPokemon(filterdArray, filterIndex) {
    return `
        <div onclick="overlayWindowdiv(${filterIndex}); toggleOverlayWrapper(${filterIndex})" class="pokemoncontainer">
            <div class="pokemonName">
                <h4>#${filterIndex + 1}</h4> <h3>${filterdArray[filterIndex].name.charAt().toUpperCase()+filterdArray[filterIndex].name.slice(1)}</h3>
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

function renderOverlayDiv(i) {
    return `
    <div  class="pokemonNameOverlay">
        <h4>#${i + 1}</h4><div class="buttonfield"><img onclick="skipToPrevious(${i})"; class="skipToPrevious" id="skiptoprevious" src="./images/icons/skipToPrevious.png">
        <h3>${allPokemon[i].name.charAt().toUpperCase()+allPokemon[i].name.slice(1)}</h3><img onclick="skipToNext(${i})"; class="skipToNext" id="skiptonext" src="./images/icons/skipToNext.png"></div><img onclick="toggleOverlayWrapper(${i})" class="CloseButton" src="./images/img/close_button.png">
    </div>
    <div class="ImageContainerOverlay ${allPokemon[i].types[0].type.name}-Img">
        <img src="${allPokemon[i].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
        <h4 onclick="showMain(${i})">main</h4><hr><h4 onclick="showstats(${i})">stats</h4><hr><h4 onclick="showEvochain(${i})">evo-chain</h4>
    </div>
    <div class="pokemondetails" id="pokemondetails">
    </div>
   `
}

function renderMainData(mainDataIndex, i, mainDataArrayWord, ability3, ability4) {
    return `
    <table>
        <tr>
            <td class="leftLinetdinList"><h3>${mainDataIndex === 4 ? "" : mainDataArrayWord[mainDataIndex] + ":"}</h3></td>
            <td class="rightLinetdinList"><h3>${mainDataIndex === 3 ? ability3 + ability4 : mainDataIndex === 4 ? "" : allPokemon[i][mainDataArrayWord[mainDataIndex]]}</h3></td>
        </tr>
    </table>
    `
}


function renderStats(i, statsIndex, textXaxis, textYaxis) {
    return `<div>
    <table>
        <tr>
            <td class="leftLinetdinList" ><h3>${allPokemon[i].stats[statsIndex].stat.name}</h3></td>
            <td class="rightLinetdinList" ><svg width="160" height="45">
            <rect class="outrect" x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
            <rect x="12" y="12" rx="10" ry="10" width="${allPokemon[i].stats[statsIndex].base_stat}" height="26" fill="darkgray"/>
            <text x="${textXaxis}" y="${textYaxis}" fill="black" font-size="18" text-anchor="middle" dominant-baseline="middle">
            ${allPokemon[i].stats[statsIndex].base_stat}
            </text>
            </svg></td>
        </tr>
    </table>`
}

function renderEvoImage(evoChainAsJson, ImageResultArray) {
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
            <td class="nameTDinEvo">${evoChainAsJson.chain.species.name}</td> 
            <td></td>
            <td class="nameTDinEvo">${evoChainAsJson.chain.evolves_to[0].species.name}</td>
            <td></td>
            ${evoChainAsJson.chain.evolves_to[0].evolves_to[0] ? `<td class="nameTDinEvo">${evoChainAsJson.chain.evolves_to[0].evolves_to[0].species.name}</td>` : ''}
        </tr>
    </table>`
}