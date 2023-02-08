async function api() {
    let api = "https://rickandmortyapi.com/api/character"
    let character = await fetch(api)
    let response = await character.json()
    let { results } = response
    return results
}

async function dom() {

    let characters = await api()

    characters.forEach(x => {
        let card = document.createRange().createContextualFragment(`
        <article class="characters"> 
            <img src= ${x.image}>
            <h2> ${x.name} </h2>
            <p> ${x.status} </p>
        </article> 
    `)
        let main = document.querySelector('main')
        main.append(card)
    })

}

dom()

