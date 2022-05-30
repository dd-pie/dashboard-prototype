const projects = document.querySelectorAll('ul li a')

projects.forEach(project => {
    project.addEventListener('click', function(e){
        e.preventDefault()
        this.parentNode.classList.toggle('active')
    })
})

function toggle(e) {
    e.preventDefault()
    console.log(e.target.nodeName)
    if (e.target.nodeName == 'A') {
        console.dir(e.target.parentNode)
        e.target.parentNode.classList.toggle('active')
    }
}