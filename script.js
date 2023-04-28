const addTodo = document.querySelector('.add') // console.log(list)
const list = document.querySelector('.todos')
const search = document.querySelector('.search input') // console.log(search)
// Add todos

const generatemplet = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delet"></i>
    </li>`
    list.innerHTML += html
}
addTodo.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        generatemplet(todo)
        addTodo.reset()
    }
})
// delet todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delet')) {
        e.target.parentElement.remove()
    }
})
// search todos

const filterTodos = term => {
    // console.log(term)
    Array.from(list.children)
        .filter(e => !e.textContent.includes(term))
        .forEach(e => e.classList.add('filtered'))
    // console.log(Array.from(list.children))
    Array.from(list.children)
        .filter(e => e.textContent.includes(term))
        .forEach(e => e.classList.remove('filtered'))
}

search.addEventListener('keydown', () => {
    const term = search.value.trim()
    // console.log(term)
    filterTodos(term)
})