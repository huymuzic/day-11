document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    const input = document.querySelector('input');

    // Enter your code here: delete movies
    
    const deleteMovies = (event) => {
        const target = event.target;
        if (target.classList.contains('delete')) {
            var listItem = target.parentNode;
            listItem.remove();
        }
    }

    list.addEventListener('click', deleteMovies);


    // Enter your code here: add movies

    const btn = document.querySelector('button');

    const addMovies = (event) => {
        event.preventDefault();
        var li = document.createElement("li");
        var movie = document.createElement("span");
        var deleteBtn = document.createElement("span");
        movie.innerHTML = input.value;
        deleteBtn.innerHTML = "delete";
        movie.setAttribute("class", "name");
        deleteBtn.setAttribute("class", "delete");
        li.appendChild(movie);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }

    btn.addEventListener('click', addMovies);

    
})

