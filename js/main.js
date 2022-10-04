const urlApi = `https://api.punkapi.com/v2/beers?page=2&per_page=20`;

window.onload = async function (){
    const response = await fetch (urlApi);
    const data = await response.json();
    console.log(data)

    let data1 = ''

    data.map((beer) =>{
        data += `<div class="card">
        <img src=${beer.image_url} alt="">
        <div class="text">
        <h1>${beer.name}</h1>
        <p>${beer.tagline}</p>
        <p>${beer.description}</p>
        <ul>
        <h3>Pair it with</h3>
        ${beer.food_pairing.map(e =>`<li> ${e} </li>`).join(' ')}
        </ul>
        <div class="specs">
        <p>ABV: ${beer.abv} | </p>
        <p>IBU: ${beer.ibu} | </p>
        <p>PH: ${beer.ph}</p>
        </div>
        </div>
        </div>`
    })

        document.getElementById("cards").innerHTML = data1;
}