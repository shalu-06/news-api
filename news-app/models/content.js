const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
    author:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: 'Description can\'t be empty'
    },
    url:{
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    source:{
        type:String
    },
    image:{
        data:Buffer,
        contentType: String
    },
    category:{
        type:String
    },
    language:{
        type:String
    },
    country:{
        type:String,
        required:true
    },
    published_at:{
        timestamps:true
    }
})

const Content = mongoose.model('Content', contentSchema)

module.exports = Content
