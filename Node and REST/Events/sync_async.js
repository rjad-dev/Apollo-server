const EventEmitter = require('events')

const emitter = new EventEmitter

emitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('This happens immediately')
    })
})

emitter.emit('event', 'a', 'b')
console.log('Hello world')