
function toggleOverlayWindow() {
    let Overlay = document.getElementById('OverlayWindow')
    Overlay.classList.toggle('dont_show')
};

function NextoverlayWindowdiv(i) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div  class="pokemonNameOverlay">
    <h4>#${i + 1}</h4> <h3>${allPokemon[i].name}</h3><img onclick="toggleOverlayWindow()" class="CloseButton" src="./images/img/close_button.png">
    </div>
    <div class="ImageContainerOverlay ${allPokemon[i].types[0].type.name}-Img">
    <img src="${allPokemon[i].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4 onclick="showNextMain(${i})" >main</h4><hr><h4 onclick="showNextstats(${i})">stats</h4><hr><h4 onclick="showNextEvochain(${i})">evo-chain</h4>
    </div>
    <div class="pokemondetails" id="pokemondetails">
    </div>
   `
    showMain(i);
    
};

function showNextstats(i) {
    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML = `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[i].stats[0].stat.name}</h3></td>
        <td>${allPokemon[i].stats[0].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[i].stats[1].stat.name}</h3></td>
        <td>${allPokemon[i].stats[1].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[i].stats[2].stat.name}</h3></td>
        <td>${allPokemon[i].stats[2].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[i].stats[3].stat.name}</h3></td>
        <td>${allPokemon[i].stats[3].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[i].stats[4].stat.name}</h3></td>
        <td>${allPokemon[i].stats[4].base_stat}</td>
    </tr>
    <tr>
        <td><h3>${allPokemon[i].stats[5].stat.name}</h3></td>
        <td>${allPokemon[i].stats[5].base_stat}</td>
    </tr>
    </div>
    `
}

function showNextMain(i) {
    let maincontainer = document.getElementById('pokemondetails')
    maincontainer.innerHTML = `
    <table>
    <tr>
        <td><h3>Height</h3></td>
        <td><h3>${allPokemon[i].height}</h3></td>
    </tr>
    <tr>
        <td><h3>weight</h3></td>
        <td><h3>${allPokemon[i].weight}</h3></td>
    </tr>
    <tr>
        <td><h3>Base esperience</h3></td>
        <td><h3>${allPokemon[i].base_experience}</h3></td>
    </tr>
    <tr>
        <td><h3>abilitys</h3></td>
        <td><h3>${allPokemon[i].abilities[0].ability.name} ${allPokemon[i].abilities[1] ? `${allPokemon[i].abilities[1].ability.name}` : ''}</h3></td>
    </tr>
    `
}

let NextImageResultArray = [];
async function showNextEvochain(cs) {
    NextImageResultArray = [];
    firstfetchArray = [];
    secondfetchArray = [];
    
    
    let NextevoUrl = `https://pokeapi.co/api/v2/pokemon-species/${cs + 1}/`
    
    let nextPokemonUrl = await fetch(NextevoUrl);
    let resultAsJson = await nextPokemonUrl.json();
    console.log(resultAsJson);

    let SecondFetch = await fetch(resultAsJson.evolution_chain.url);
    let SecondResultAsJson = await SecondFetch.json();
    
    
    
    let NextNameArray = [
        SecondResultAsJson.chain.species.name,
        SecondResultAsJson.chain.evolves_to[0].species.name,
        SecondResultAsJson.chain.evolves_to[0].evolves_to[0] ? SecondResultAsJson.chain.evolves_to[0].evolves_to[0].species.name : null];

    let realName2 = NextNameArray.filter(name => name !== null)

    for (let NextImageIndex = 0; NextImageIndex < realName2.length; NextImageIndex++) {
        
        let NextEvoImageUrl = `https://pokeapi.co/api/v2/pokemon/${realName2[NextImageIndex]}/`;
        
        let fetchNextEvoImage = await fetch(NextEvoImageUrl);
        let NextResultAsjson = await fetchNextEvoImage.json();
        NextImageResultArray.push(NextResultAsjson);
    }

    await showNextEvoImage(SecondResultAsJson, NextImageResultArray)
};





// async function fetchNextSpecialFamily(fetchData, firstfetchArray) {
//     for (let index = 0; index < 2; index++) {
//         let FirstFetch = await fetch(fetchData[index]);
//         let resultAsJsonFirst = await FirstFetch.json();    // new result
//         firstfetchArray.push(resultAsJsonFirst);
//     }
    
// };

// async function fetchNextNormalFamily(fetchData, firstfetchArray) {
//     for (let index = 0; index < fetchData.length; index++) {
//         let FirstFetch = await fetch(fetchData[index]);
//         let resultAsJsonFirst = await FirstFetch.json();    // new result
//         firstfetchArray.push(resultAsJsonFirst);
//     }
    
// }

// async function NextsecondFetchStep() {
//     for (let index = 0; index < firstfetchArray.length; index++) {
//         let stepInBetween = firstfetchArray[index].varieties[0].pokemon.url;
//         let SecondFetch = await fetch(stepInBetween);
//         let resultAsJsonSecond = await SecondFetch.json(); // again new result
//         secondfetchArray.push(resultAsJsonSecond);
//     }
// }


async function showNextEvoImage(SecondResultAsJson, NextImageResultArray) {
    let evocontainer = document.getElementById('pokemondetails')
    
    evocontainer.innerHTML = `
    <table>
    <tr>
        <td><img src="${NextImageResultArray[0].sprites.other.dream_world['front_default']}"></td>
        <td></td>
        <td><img src="${NextImageResultArray[1].sprites.other.dream_world['front_default']}"</td>
        <td></td>
        <td><img src="${NextImageResultArray[2] ? NextImageResultArray[2].sprites.other.dream_world['front_default'] : ''}"</td>
    <tr>
    <tr>
        <td> ${SecondResultAsJson.chain.species.name}</td>
        <td>${SecondResultAsJson.chain.evolves_to[0].species.name}</td>
        <td>${SecondResultAsJson.chain.evolves_to[0].evolves_to[0] ? SecondResultAsJson.chain.evolves_to[0].evolves_to[0].species.name : ''} </td>
    <tr>
    </table>`; 
    
    console.log('try it')
};