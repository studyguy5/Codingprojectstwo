
function toggleOverlayWindow() {
    let Overlay = document.getElementById('OverlayWindow')
    Overlay.classList.toggle('dont_show')
};

function overlayWindowdiv(firstPokemonIndex) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div  class="pokemonNameOverlay">
    <h4>#${firstPokemonIndex + 1}</h4> <h3>${allPokemon[firstPokemonIndex].name}</h3><img onclick="toggleOverlayWindow()" class="CloseButton" src="./images/img/delete_button.png">
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
   showMain(firstPokemonIndex);
    console.log('funktion arbeitet');
};


function showstats(firstPokemonIndex){
    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML= `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[0].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[0].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[1].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[1].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[2].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[2].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[3].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[3].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[4].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[4].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[firstPokemonIndex].stats[5].stat.name}</h3></td>
        <td>${allPokemon[firstPokemonIndex].stats[5].base_stat}</td>
    </tr>
    </div>
    `
}

function showMain(firstPokemonIndex){
    let maincontainer = document.getElementById('pokemondetails')
    maincontainer.innerHTML=`
    <table>
    <tr>
        <td><h3>Height</h3></td>
        <td><h3>${allPokemon[firstPokemonIndex].height}</h3></td>
    </tr>
    <tr>
        <td><h3>weight</h3></td>
        <td><h3>${allPokemon[firstPokemonIndex].weight}</h3></td>
    </tr>
    <tr>
        <td><h3>Base esperience</h3></td>
        <td><h3>${allPokemon[firstPokemonIndex].base_experience}</h3></td>
    </tr>
    <tr>
        <td><h3>abilitys</h3></td>
        <td><h3>${allPokemon[firstPokemonIndex].abilities[0].ability.name} ${allPokemon[firstPokemonIndex].abilities[1] ? `${allPokemon[firstPokemonIndex].abilities[1].ability.name}` : ''}</h3></td>
    </tr>
    `
}




function showEvochain(index){
    let evocontainer = document.getElementById('pokemondetails')
    if (allEvoChains[index].id !== allEvoChains[index].id){
        evocontainer.innerHTML=`
    <table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <tr>
    <tr>
        <td> ${allEvoChains[index++].chain.species.name}</td>
        <td>${allEvoChains[index++].chain.evolves_to[0].species.name}</td>
        <td>${allEvoChains[index++].chain.evolves_to[0].evolves_to[0].species.name}</td>
    <tr>
    </table>` 
    }
    
    
};

// window.toggleOverlayWindow = toggleOverlayWindow;  von rechts nach links soll die funktion toggleOverlayWindow mit dem Window tag global machen


// <td><h3>: ${allPokemon[firstPokemonIndex].height}</h3></td>
//     </tr>
//     <tr>
//     <td><h3>weight</h3></td>
//     <td><h3>: ${allPokemon[firstPokemonIndex].weight}</h3></td>
//     </tr>
//     <tr>
//     <td><h3>Base esperience</h3></td>
//     <td><h3>: ${allPokemon[firstPokemonIndex].base_experience}</h3></td>
//     </tr>
//     <tr>
//     <td><h3>abilitys</h3></td>
//     <td><h3>:${allPokemon[firstPokemonIndex].abilities[0].ability.name} ${allPokemon[firstPokemonIndex].abilities[1] ? `${allPokemon[firstPokemonIndex].abilities[1].ability.name}` : ''}</h3></td>
//     </tr>
//     </table>
    