async function getJoke() {
    const url = 'https://icanhazdadjoke.com/'
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })

    return response.json()
}

const div = document.getElementById("joke").textContent = "Loading..."

getJoke()
    .then(response => {
        const div = document.getElementById("joke").textContent = response.joke
    })
    .catch(error => {
        console.log(error.message)
    })