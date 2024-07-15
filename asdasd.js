let addButton = document.getElementById('ButtongetTask')
let list = document.getElementById('list')
let limite = []
addButton.addEventListener('click', add)


function add(event) {
   
    let InputputTask2 = document.getElementById('InputputTask')
    let InputputTask = document.getElementById('InputputTask').value
    if (InputputTask === '') {
        alert('Put something.')
    } else {
        if(limite.length > 9) {
            alert('Você não consegue adicionar mais coisas.')
            return
        }
        InputputTask2.focus()
        InputputTask2.value = ''
        let newItem = document.createElement('li')
        let span = document.createElement('span')
        span.textContent = 'ˣ'
        newItem.textContent = InputputTask
        newItem.classList.toggle('unchecked')
        list.appendChild(newItem)
        newItem.appendChild(span)
        limite.push(newItem) 
        span.addEventListener('click', function(e) {
            e.target.parentElement.remove();
            limite.splice(0, 1)
        })
        
        newItem.addEventListener('click', function(ee) {
            ee.target.classList.toggle('checked')
        })
        
    }
}

document.addEventListener('keypress', function(event) {
    if (event.key ===  'Enter') {
        add()
    }
})