// Get HTML element and add event listener to it
const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";
const apiKey = "ADD-API-KEY-HERE";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

async function getJoke(){
    try {
        // Show loading text and disable the button
        jokeElement.innerText = "Loading...";
        btnElement.disabled = true;
        
        // fetch the response
        const response = await fetch(apiUrl, options);
        
        // convert data to json format
        const data = await response.json();
        
        // Enable the button
        btnElement.disabled = false;

        // Add joke from the JSON array response in the HTML
        jokeElement.innerText = data[0].joke;
    } catch (error) {
        jokeElement.innerText = "Error encountered. Please try again later.";
        btnElement.disabled = false;
    }
}

btnElement.addEventListener("click", getJoke);
