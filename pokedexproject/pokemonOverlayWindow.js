
function toggleOverlayWindow(firstPokemonIndex) {
    let Overlay = document.getElementById('OverlayWindow')
    Overlay.classList.toggle('dont_show')
    overlayWindowdiv(firstPokemonIndex);
};

function overlayWindowdiv(firstPokemonIndex) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div class="pokemonNameOverlay">
    <h4>#${firstPokemonIndex + 1}</h4> <h3>${allPokemon[firstPokemonIndex].name}</h3>
    </div>
    <div class="ImageContainerOverlay ${allPokemon[firstPokemonIndex].types[0].type.name}-Img">
    <img src="${allPokemon[firstPokemonIndex].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4>main</h4><hr><h4>stats</h4><hr><h4>evo</h4>
    </div>
   `
    console.log('funktion arbeitet');
};

// window.toggleOverlayWindow = toggleOverlayWindow;  von rechts nach links soll die funktion toggleOverlayWindow mit dem Window tag global machen
