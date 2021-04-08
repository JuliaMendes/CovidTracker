const APIURL = 'https://covid19.mathdro.id/api/'

const btn = document.querySelector('.btn')
const search = document.getElementById('search')
const main = document.getElementById('main')
let nameCountry 

async function getCountry(country) {
    try{
        const {data} = await axios(APIURL + 'countries/' + country)
        createCountryCard(data)
    } catch(err){
        createErrorCard(nameCountry + ' was not found')
}       
}


function createCountryCard(country) {

    const cardHTML = `
        <div class="card" id="card">
            <div class="name-country">
                <h2>${nameCountry}</h2>
            </div>
            <div class="covid-info">
                <h3>Confirmed: ${country.confirmed.value}</h3>
                <h3>Recovered: ${country.recovered.value}</h3>
                <h3>Deaths: ${country.deaths.value}</h3>
            </div>
            <p>Last Update: ${country.lastUpdate.replace(/-/g, '/').replace(/T/, ' ').replace(/\..+/, '')}</p>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h3>${msg}</h3>
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



