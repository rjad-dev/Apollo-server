const {Sequelize} = require('sequelize')

module.exports = new Sequelize('rajeshadhikari', 'rajeshadhikari', 'rajeshadhikari', {
    host: 'localhost',
    dialect: 'postgres'
})
