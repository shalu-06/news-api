const newsForm = document.querySelector('form')
const search = document.querySelector('input')

newsForm.addEventListener('submit',(e) => {
    //console.log('testing!')
    e.preventDefault()
    const keywords = search.value
    fetch(`http://localhost:3001/news?${keywords}`).then(res => {
    res.json().then(data => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})

})