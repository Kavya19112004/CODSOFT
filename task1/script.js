async function getJoke() {
    const jokeElement = document.getElementById("joke");

    try {
       
        jokeElement.innerText = "Loading joke...";

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        jokeElement.innerText = `${data.setup} \n${data.punchline}`;

    } catch (error) {
        jokeElement.innerText = "Failed to load joke. Please try again!";
        console.error(error);
    }
}