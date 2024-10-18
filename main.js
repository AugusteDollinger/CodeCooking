const recetteJson = {
    "pateACrepe": {
        "img": "assets/crepe.png",
        "name": "Pâte à Crêpe",
        "rating": 4.8,
        "time": "30 mins",
        "creator": "Max Delfueblo"
    },
    "pateATartiner": {
        "img": "assets/nutella.png",
        "name": "Pâte à Tartiner",
        "rating": 4.0,
        "time": "20 mins",
        "creator": "Olivia"
    },
    "superJusDeFruit": {
        "img": "assets/jusDeFruit.png",
        "name": "Super Jus de Fruit",
        "rating": 4.5,
        "time": "15 mins",
        "creator": "Annie Dalko"
    }
}

$(document).ready(() => {
    console.log('hello')
    for (const item in recetteJson) {
        const recette = recetteJson[item];
        const recetteHtml = `
            <article>
                <img src="${recette.img}" alt="${recette.name}">
                <div>
                    <h2>${recette.name}</h2>
                    <p>Rating: ${recette.rating}</p>
                    <p>Time: ${recette.time}</p>
                    <p>Creator: ${recette.creator}</p>
                </div>
            </article>
        `;
        $('#recette').append(recetteHtml);
    }
})