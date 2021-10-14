const express = require('express')
const newsRouter = express.Router()

newsRouter.get('',async(req,res) => res.render('index'))

newsRouter.get('/news',async(req,res) => res.render('news'))


newsRouter.post('/news',async(req,res) =>  {
    try{
        const url = `http://api.mediastack.com/v1/news?access_key=007fb7bef6f6de4c98b9e9a3e8186382&query=${keywords}`
    
            request({url,json:true},(error,response) => {
            const newsData = response.body.data
            const newsLength = newsData.length
            const data = []
            for(var i = 1 ; i<=3 ;i++){
               const randomNews = Math.floor(Math.random() * newsLength)
               //console.log(newsData[randomNews])
               data = newsData[randomNews]
             
            }
               
        res.render('news',data)
        
        })
    }catch{error => res.send({error})}
})


module.exports = newsRouter