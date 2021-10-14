const request = require('request')
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3001
const newsData = require('./news-data')
const newsRouter = require('../routes/news_routes')

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))


app.set('view engine','hbs')
app.use(newsRouter)


// const url = 'http://api.mediastack.com/v1/news?access_key=007fb7bef6f6de4c98b9e9a3e8186382&keywords=tennis&countries=us,gb,de'

// request({url,json:true},(error,response) => {
// //console.log(response.body.data)
// if(error){
//     console.log('Unable to connect to the news-API...')
// }else if(response.body.data.length === 0){
//     console.log('Unable to fetch the data')
// }else{
//     const newsData = response.body.data
//     const newsLength = newsData.length
//     for(var i = 1 ; i<=3 ;i++){
//        const randomNews = Math.floor(Math.random() * newsLength)
//        console.log(newsData[randomNews])
//     }
// }
// })



// app.get('/',(req,res) => {
//     res.render('index')
// })


// app.post('/news',(req,res) =>  {
//     const url = 'http://api.mediastack.com/v1/news?access_key=007fb7bef6f6de4c98b9e9a3e8186382&' + keywords + '&' + countries
    
//     request({url,json:true},(error,response) => {
//         const newsData = response.body.data
//         const newsLength = newsData.length
//         const data = []
//         for(var i = 1 ; i<=3 ;i++){
//            const randomNews = Math.floor(Math.random() * newsLength)
//            //console.log(newsData[randomNews])
//            data = newsData[randomNews]
//         }
           
//     res.render('news',data)
    
//     })

    
// })



const keywords = process.argv[2]
//const countries = process.argv[2]

if(!keywords){
    console.log('Please provide keywords to be searched!')
}else{
    newsData(keywords,(error , data) => {
        if(error){
            console.log('Error:', error)
        }else{
            console.log(data)
        }
    })
}




app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})