
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


function showstats(firstPokemonIndex) {
    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML = `<div>
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

function showMain(firstPokemonIndex) {
    let maincontainer = document.getElementById('pokemondetails')
    maincontainer.innerHTML = `
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


// try to fix the picture index problem

async function showEvochain(index) {
    let evocontainer = document.getElementById('pokemondetails')
    let specialindex = Math.floor(index / 3);
    let i = specialindex;
    
    let EvoImageUrl1 = allEvoChains[i].chain.species.url;
    let EvoImageUrl2 = allEvoChains[i].chain.evolves_to[0] ? allEvoChains[i].chain.evolves_to[0].species.url : ''; 
    let EvoImageUrl3 = allEvoChains[i].chain.evolves_to[0].evolves_to[0] ? allEvoChains[i].chain.evolves_to[0].evolves_to[0].species.url : '';
    // console.warn(allEvoChains[i].chain.evolves_to[0].evolves_to[0].species.url);
    // hier der Bereich  Zeile 89 bis 91 frage ich ab, ob es in der evochain auch 2 oder 3 arten gibt hier liegt wahrscheinlich der fehler
   
    
    //hier versuchen, die Bedingung anders zu bauen







    let pullImageN1 = await fetch(EvoImageUrl1);
    let pullResult1 = await pullImageN1.json();

    let pullImageN2 = await fetch(EvoImageUrl2);
    let pullResult2 = await pullImageN2.json();
    
    let pullImageN3 = await fetch(EvoImageUrl3);
    let pullResult3 = await pullImageN3.json();

    ;
    // console.log(pullResult);

    let rootImageUrl1 = pullResult1.varieties[0].pokemon.url;
    let rootImagefetch = await fetch(rootImageUrl1);
    let rootResult1 = await rootImagefetch.json();

    let rootImageUrl2 = pullResult2.varieties[0].pokemon.url;
    let rootImagefetch2 = await fetch(rootImageUrl2);
    let rootResult2 = await rootImagefetch2.json();

    let rootImageUrl3 = pullResult3.varieties[0].pokemon.url;
    let rootImagefetch3 = await fetch(rootImageUrl3);
    let rootResult3 = await rootImagefetch3.json();
    
    

    
    evocontainer.innerHTML = `
    <table>
    <tr>
        <td><img src="${rootResult1.sprites.other.dream_world['front_default']}">${allPokemon[index].id}</td>
        <td></td>
        <td><img src="${rootResult2.sprites.other.dream_world['front_default'] ? rootResult2.sprites.other.dream_world['front_default'] : ''}"</td>
        <td></td>
        <td><img src="${rootResult3.sprites.other.dream_world['front_default'] ? rootResult3.sprites.other.dream_world['front_default'] : ''}"</td>
    <tr>
    <tr>
        <td> ${allEvoChains[i].chain.species.name}</td>
        <td>${allEvoChains[i].chain.evolves_to[0].species.name}</td>
        <td>${allEvoChains[i].chain.evolves_to[0].evolves_to[0] ? allEvoChains[i].chain.evolves_to[0].evolves_to[0].species.name : ''} </td>
    <tr>
    </table>`; console.log('try it')



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
