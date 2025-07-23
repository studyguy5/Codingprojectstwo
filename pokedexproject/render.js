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