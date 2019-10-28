const fs = require('fs')
const events = require('events')

const EventEmitter = new events.EventEmitter()

const getMime=()=>{
    fs.readFile('./07-callback-eventEmit.json', (err, data) =>{
        EventEmitter.emit('dataOnEmit', data)
    })
}

EventEmitter.on('dataOnEmit', data => console.log(data.toString()))

getMime()