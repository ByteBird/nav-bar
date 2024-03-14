let links = document.querySelectorAll('.nav-items')
let selectLink = document.querySelector('.select-link')
links.forEach(item=>{
    item.addEventListener('click', enlace=>{
        links.forEach(e=>{
            e.classList.remove('select')
        })
        item.classList.add('select')
        selectLink.style.left = `${item.offsetLeft}px`
        selectLink.textContent = item.textContent
    })
})
