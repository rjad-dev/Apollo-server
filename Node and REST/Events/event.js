const EventEmitter = require('events')
const emitter = new EventEmitter

emitter.on('event', ()=>{
    console.log('Event occured')
})


emitter.on('event', (a, b) => {
  console.log(a, b, this, this === emitter);
});
emitter.emit('event', 'a', 'b');

// prints
// Event occured
// a b {} false