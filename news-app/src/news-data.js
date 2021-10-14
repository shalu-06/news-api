const request = require('request')


const newsData = ((keywords,callback) => {

const url = `http://api.mediastack.com/v1/news?access_key=007fb7bef6f6de4c98b9e9a3e8186382&query=${keywords}`

request({url,json:true},(error,response) => {
//console.log(response.body.data)
if(error){
    callback('Unable to connect to the news-API...',undefined)
}else if(response.body.data.length === 0){
    callback('Unable to fetch the data',undefined)
}else{
    const newsData = response.body.data
    const newsLength = newsData.length
    for(var i = 1 ; i<=3 ;i++){
       const randomNews = Math.floor(Math.random() * newsLength)
       const data = newsData[randomNews]
       callback(undefined,data)
    }
}
})

})

module.exports = newsData