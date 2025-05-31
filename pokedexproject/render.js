function init() {
    renderPokemon();
};





let basicUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';




async function renderPokemon() {

    let result = await fetch(basicUrl); //let result

    let resultAsJSON = await result.json();       //
    let pokemon = resultAsJSON.results;      //let pokemon = resultAsJson.results
    console.log(pokemon);


    let mainsectioncontent = document.getElementById('main-section-content');  //let mainsectioncontent nennen
    // auch value nennen / oder durch einen neuen Loop Zahlen einfügen



    for (let imageIndex = 1; imageIndex <= 20; imageIndex++) {
        let detailsUrl = `https://pokeapi.co/api/v2/pokemon/${imageIndex}/`;
        let details = await fetch(detailsUrl);
        let detailsAsJSON = await details.json();

        console.log(detailsAsJSON);
        mainsectioncontent.innerHTML += `
        <div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${imageIndex}</h4> <h3>${pokemon[imageIndex - 1].name}</h3>
        </div>
        <div class="ImageContainer ${detailsAsJSON.types[0].type.name}-Img">
        <img src="${detailsAsJSON.sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${detailsAsJSON.types[0].type.name}"src="./images/icons/${detailsAsJSON.types[0].type.name}.svg">
        ${detailsAsJSON.types[1] ? `<img class="${detailsAsJSON.types[1].type.name}" src="./images/icons/${detailsAsJSON.types[1].type.name}.svg">` : ''}   
        </div>
        </div>`

    };

}
//here we see a short if-statement within a literals start with an ${} and put a literals again in the if statement within the literals
//so it's possible to put a literals within a literals


//<img src="${detailsAsJSON.sprites.other.showdown['front_default']}"> thats the gif's who moves in the image

//https://willowy-alfajores-643a8c.netlify.app/manifest.json
//https://app-manifest.firebaseapp.com/

//VM im Debugger steht für Virtual Maschine

async function renderNext() {
    let basicUrl2 = 'https://pokeapi.co/api/v2/pokemon?offset=21&limit=20';

    let result = await fetch(basicUrl2); //let result

    let resultAsJSON = await result.json();       //
    let pokemon2 = resultAsJSON.results;
    let mainsectioncontent = document.getElementById('main-section-content');

    for (let nextPokemonIndex = 21; nextPokemonIndex <= 40; nextPokemonIndex++) {

        let loadNextUrl = `https://pokeapi.co/api/v2/pokemon/${nextPokemonIndex}/`;
        let loadnext = await fetch(loadNextUrl);
        let detailsAsPokemon = await loadnext.json();

        console.log(detailsAsPokemon);

        mainsectioncontent.innerHTML += `<div class="pokemoncontainer">
        <div class="pokemonName">
        <h4>#${nextPokemonIndex}</h4> <h3>${pokemon2[nextPokemonIndex - 21].name}</h3>
        </div>
        <div class="ImageContainer ${detailsAsPokemon.types[0].type.name}-Img">
        <img src="${detailsAsPokemon.sprites.other.dream_world['front_default']}">
        </div>
        <div class="type-button-area">
        <img class="${detailsAsPokemon.types[0].type.name}"src="./images/icons/${detailsAsPokemon.types[0].type.name}.svg">
        ${detailsAsPokemon.types[1] ? `<img class="${detailsAsPokemon.types[1].type.name}" src="./images/icons/${detailsAsPokemon.types[1].type.name}.svg">` : ''}   
        </div>
        </div>`
    }
};