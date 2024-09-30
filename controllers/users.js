let users = require('../data/index.js')
const sampleUser = require('../data/sampleUser.js')

const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    const ids = users.map( user => user.id)
    
    if ( ids.indexOf(parseInt(req.params.id)) === -1 ) {
        return res.status(404).send('');
    }

    res.json(users.filter( user => user.id === parseInt(req.params.id)))
}

const createUser = (req, res) => {
    const id = users.length + 1

    req.body = {
        ...sampleUser
    }

    req.body.id = id

    users[users.length] = req.body

    res.json(users)
}

const updateUser = (req, res) => {

    const ids = users.map( user => user.id)
    
    if ( ids.indexOf(parseInt(req.params.id)) === -1 ) {
        return res.status(400).send('');
    }

    req.body = {
        ...sampleUser
    }

    req.body.id = req.params.id

    users[req.params.id -1 ] = req.body

    res.json(users)
}

const deleteUser = (req, res) => {

    const ids = users.map( user => user.id)
    
    if ( ids.indexOf(parseInt(req.params.id)) === -1 ) {
        return res.status(404).send('');
    }
    
    // users changes (ie. don't assign the filtered array to another variable b/c won't be saved)
    users = users.filter( user => user.id !== parseInt(req.params.id))

    res.json(users)
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}