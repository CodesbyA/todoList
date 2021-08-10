const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

    // Creating reusable function
const generateTemplate = todo => {

const newText =
`
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`
list.innerHTML += newText;  // appending the new value to the bottom of the list

};


addForm.addEventListener('submit', e => {  //Listening to submit event
e.preventDefault();
const todo = addForm.add.value.trim(); //getting the value the user types and trimming it for spaces

if (todo.length){
    generateTemplate(todo);  //calling the fn 
    addForm.reset(); //resetting the user value field to blank
}
});

// Deleting Todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filter = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

            Array.from(list.children)
            .filter((todo) => todo.textContent.toLowerCase().includes(term))
                .forEach((todo) => todo.classList.remove('filtered'));
};

//SEARCHING - KEYUP EVENT 
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filter(term);
});