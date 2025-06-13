
function toggleOverlayWindow() {
    let Overlay = document.getElementById('OverlayWindow')
    Overlay.classList.toggle('dont_show')
};

function overlayWindowdiv(firstPokemonIndex) {
    let conectionToOverlaydiv = document.getElementById('OverlayWindow')
    conectionToOverlaydiv.innerHTML = `<div  class="pokemonNameOverlay">
    <h4>#${firstPokemonIndex + 1}</h4> <h3>${allPokemon[firstPokemonIndex].name}</h3>
    </div>
    <div class="ImageContainerOverlay ${allPokemon[firstPokemonIndex].types[0].type.name}-Img">
    <img src="${allPokemon[firstPokemonIndex].sprites.other.dream_world['front_default']}">
    </div>
    <div class="mainInfoCategoriesOverlay">
    <h4>main</h4><hr><h4>stats</h4><hr><h4>evo</h4>
    </div>
    <div class="pokemondetails">
    <table>
    <tr>
    <td><h3>Height</h3></td>
    <td><h3>:1,34m</h3></td>
    </tr>
    <tr>
    <td><h3>weight</h3></td>
    <td><h3>:8,5kg</h3></td>
    </tr>
    <tr>
    <td><h3>Base esperience</h3></td>
    <td><h3>:abc</h3></td>
    </tr>
    <tr>
    <td><h3>abilitys</h3></td>
    <td><h3>:abc</h3></td>
    </tr>
    </table>
    </div>
   `
    console.log('funktion arbeitet');
};

// window.toggleOverlayWindow = toggleOverlayWindow;  von rechts nach links soll die funktion toggleOverlayWindow mit dem Window tag global machen
