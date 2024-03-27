// Here are the image link examples:
// Static version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// Animated version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif


// This will trigger when users click on "Generate" button!
const button = document.querySelector('#generate-btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
        // Get the value of the input field with the ID 'pokemon-number'
        const input = parseInt(document.querySelector('#pokemon-number').value);
        // Get the checked state of the checkbox with the ID 'animated-images'
        const animated = document.querySelector('#animated-images').checked;
        // Clear the contents of the element with the ID 'container'
        const container = document.querySelector("#container");
        container.innerHTML = "";
        // Call the generatePokemon function with the retrieved values
        generatePokemon(input, animated);    
});

// function to check if user selects animated or static images 
function generatePokemon(pokemonNumber=100, animated=true){
    
    if (animated==true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif';
    } 
    else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png';
    }

    // Select the element with the ID 'container'
    const container = document.querySelector('#container');
    // Loop from 1 to the specified pokemonNumber
    for (let i = 1; i <= pokemonNumber; i++) {
        // Create a new div element
        const div = document.createElement("div");
        // Add the 'pokemon' class to the div element
        div.classList.add("pokemon");
        // Create a new span element
        const span = document.createElement("span");
        // Set the inner text of the span element to the current iteration number
        span.innerHTML = "#" + i; 
        // Create a new img element
        const img = document.createElement('img');
        // Set the src attribute of the img element to the constructed image URL
        // Example URL https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
        img.setAttribute('src', baseURL + i + '.' + fileExtension);
        // Append the img element to the pokemon div
        div.appendChild(img);
        // Append the label span element to the pokemon div
        div.appendChild(span);
        // Append the pokemon div to the container element
        container.appendChild(div);
    }

}

