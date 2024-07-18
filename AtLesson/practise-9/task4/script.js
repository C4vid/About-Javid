const input = document.querySelector("input")
const addBtn = document.getElementById('addbtn')
const removeAll = document.getElementById('removebtn')
const list = document.getElementById('list')


    addBtn.addEventListener('click', () => {
        const li = document.createElement('li')
        li.innerText = input.value
        ul.appendChild(li)
        input.value = ''
    })
    
    ul.addEventListener("click" , () => {
        let li = e.target;
        li.classlist.toggle("done")
    })

    removeAll.addEventListener('click', () => {
        list.innerHTML = ''
    })