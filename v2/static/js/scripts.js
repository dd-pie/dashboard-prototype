const projects = document.querySelectorAll('section ul li a')
const filterBtns = document.querySelectorAll('section header button')

projects.forEach(project => {
    project.addEventListener('click', function(e){
        e.preventDefault()
        this.parentNode.classList.toggle('active')
    })
})

filterBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        this.parentNode.parentNode.classList.toggle('filter')
    })
})