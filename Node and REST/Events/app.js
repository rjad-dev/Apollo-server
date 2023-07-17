const EventEmitter = require('events')

const emitter = new EventEmitter()

//on -> listen for an event
//emit -> emit an event

emitter.on('response', (name, id) => {
    console.log(`Request received from ${name} with ID: ${id}`)
})

emitter.on('response', () => {
    console.log('Some other logic: ')
})

emitter.emit('response', 'RJ', 101)


