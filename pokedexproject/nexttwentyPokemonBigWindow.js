


function NextoverlayWindowdiv(cs) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div  class="pokemonNameOverlay">
    <h4>#${cs + 1}</h4><div class="buttonfield"><img onclick="skipTOPREVIOUS(${cs})"; class="skipToPrevious" id="skiptoprevious" src="./images/icons/skipToPrevious.png"><h3>${allPokemon[cs].name}</h3><img onclick="skipTONEXT(${cs})"; class="skipToNext" id="skiptonext" src="./images/icons/skipToNext.png"></div><img onclick="toggleOverlayWrapper()" class="CloseButton" src="./images/img/close_button.png">
    </div>
    <div class="ImageContainerOverlay ${allPokemon[cs].types[0].type.name}-Img">
    <img src="${allPokemon[cs].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4 onclick="showNextMain(${cs})" >main</h4><hr><h4 onclick="showNextstats(${cs})">stats</h4><hr><h4 onclick="showNextEvochain(${cs})">evo-chain</h4>
    </div>
    <div class="pokemondetails" id="pokemondetails">
    </div>
   `
    showMain(cs);

};

function skipTONEXT(cs) {
    cs++
    NextoverlayWindowdiv(cs);
}

function skipTOPREVIOUS(cs) {
    cs--
    NextoverlayWindowdiv(cs);
}



function showNextMain(cs) {
    let maincontainer = document.getElementById('pokemondetails')
    maincontainer.innerHTML = `
    <table>
    <tr>
        <td><h3>Height</h3></td>
        <td><h3>${allPokemon[cs].height}</h3></td>
    </tr>
    <tr>
        <td><h3>weight</h3></td>
        <td><h3>${allPokemon[cs].weight}</h3></td>
    </tr>
    <tr>
        <td><h3>Base esperience</h3></td>
        <td><h3>${allPokemon[cs].base_experience}</h3></td>
    </tr>
    <tr>
        <td><h3>abilitys</h3></td>
        <td><h3>${allPokemon[cs].abilities[0].ability.name} ${allPokemon[cs].abilities[1] ? `${allPokemon[cs].abilities[1].ability.name}` : ''}</h3></td>
    </tr>
    `
}

// let barX = 10;
// let barY = 10;
// let barwidth = 150;
// let barheight = 30;

// let textX = (barX + barwidth) / 2;
// let textY = (barY + barheight) / 2;

function showNextstats(cs) {
    let statsValue = allPokemon[cs].stats[0].base_stat;
    let barX = 10;
    let barY = 10;
    let barwidth = 150;
    let barheight = 30;

    let textX = (barX + barwidth) / 2;
    let textY = (barY + barheight) / 2;


    let statscontainer = document.getElementById('pokemondetails')
    statscontainer.innerHTML = `<div>
    <table>
    <tr>
        <td><h3>${allPokemon[cs].stats[0].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="${barX + 2}" y="${barY + 2}" rx="10" ry="10" width="${(allPokemon[cs].stats[0].base_stat)}" height="26" fill="darkgray"/>
        <text x="${textX}" y="${textY}" fill="red" font-size="14" text-anchor="middle" dominant-baseline="middle">
    ${statsValue}
  </text>
        </svg>
        </td>
    </tr>
    <tr>
        <td><h3>${allPokemon[cs].stats[1].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[cs].stats[1].base_stat)}" height="26" fill="darkgray"/>
        </svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[cs].stats[2].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[cs].stats[2].base_stat)}" height="26" fill="darkgray"/>
        </svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[cs].stats[3].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[cs].stats[3].base_stat)}" height="26" fill="darkgray"/>
        </svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[cs].stats[4].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[cs].stats[4].base_stat)}" height="26" fill="darkgray"/>
        </svg></td>
    </tr>
    <tr>
        <td><h3>${allPokemon[cs].stats[5].stat.name}</h3></td>
        <td><svg width="160" height="45">
        <rect x="10" y="10" width="150" rx="10" ry="10" height="30" stroke="orange" stroke-width="2" fill="none"/>
        <rect x="12" y="12" rx="10" ry="10" width="${(allPokemon[cs].stats[5].base_stat)}" height="26" fill="darkgray"/>
        </svg></td>
    </tr>
    </div>
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
        <td><img src="${NextImageResultArray[0].sprites['front_default']}"></td>
        <td><img class="arrowImage" src="./images/img/arrow-blue.png"></td>
        <td><img src="${NextImageResultArray[1].sprites['front_default']}"</td>
        <td><img class="arrowImage" src="./images/img/arrow-blue.png"></td>
        <td><img src="${NextImageResultArray[2] ? NextImageResultArray[2].sprites['front_default'] : ''}"</td>
    <tr>
    <tr>
        <td> ${SecondResultAsJson.chain.species.name}</td>
        <td>${SecondResultAsJson.chain.evolves_to[0].species.name}</td>
        <td>${SecondResultAsJson.chain.evolves_to[0].evolves_to[0] ? SecondResultAsJson.chain.evolves_to[0].evolves_to[0].species.name : ''} </td>
    <tr>
    </table>`;
};