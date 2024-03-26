// Here are the image link examples:
// Static version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// Animated version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif


// This will trigger when users click on "Generate" button!
const button = document.querySelector('#generate-btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
        // ENTER YOUR CODE HERE!
        const input = parseInt(document.querySelector('#pokemon-number').value);
        const animated = document.querySelector('#animated-images').checkedState;
        const container = document.querySelector("#container");
        container.innerHTML = "";

        generatePokemon(input, animated);
        // Hints: Follow these steps:
        // Get the value of the input field with the ID 'pokemon-number'

        // Get the checked state of the checkbox with the ID 'animated-images'

        // Clear the contents of the element with the ID 'container'

        // Call the generatePokemon function with the retrieved values


});

function generatePokemon(pokemonNumber=100, animated=true){
    if (animated==true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif';
    } else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png';
    }
    const container = document.querySelector('#container');
    
    // ENTER YOUR CODE HERE!

    for (let i = 1; i <= pokemonNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("pokemon");
        const span = document.createElement("span");
        span.innerHTML = i;
        const img = document.createElement('img');
        img.setAttribute('src', baseURL + i + '.' + fileExtension);
        div.appendChild(img);
        div.appendChild(span);
        container.appendChild(div);
    }

    // Hints: Follow these steps:
    // Select the element with the ID 'container'
    // Loop from 1 to the specified pokemonNumber
        // Create a new div element

        // Add the 'pokemon' class to the div element

        // Create a new span element

        // Set the inner text of the span element to the current iteration number

        // Create a new img element

        // Set the src attribute of the img element to the constructed image URL
    
        // Append the img element to the pokemon div

        // Append the label span element to the pokemon div

        // Append the pokemon div to the container element

}

