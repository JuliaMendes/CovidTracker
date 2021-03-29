const APIURL = 'https://covid19.mathdro.id/api/'

const btn = document.querySelector('.btn')
const search = document.getElementById('search')
const main = document.getElementById('main')
let nameCountry 

async function getCountry(country) {
        const {data} = await axios(APIURL + 'countries/' + country)
        createCountryCard(data)
}


function createCountryCard(country) {

    const cardHTML = `
        <div class="card" id="card">
            <div class="country">
                <h2>${nameCountry}</h2>
            </div>
            <div class="info">
                <h3>Confirmed:${country.confirmed.value}</h3>
                <h3>Recovered:${country.recovered.value}</h3>
                <h3>Deaths:${country.deaths.value}</h3>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const country = search.value
    nameCountry = country

    if(country) {
        getCountry(country)

        search.value = ''
    }

})



