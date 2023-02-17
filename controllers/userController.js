const { request, response } = require('express')

const userGet = (req = request, res = response ) => {
    res.json({
        msg: ' Get de Hola Juan '
    })
}

const userGetParams = (req = request, res = response ) => {

    const { key1, key2, key3 = 'defaultKey'} = req.query

    res.json({
        msg: ' Get de Hola Juan ',
        key1, 
        key2, 
        key3
    })
}

const userPost = (req, res = response ) => {
    
    const { name, age } = req.body;

    res.json({
        msg: ' Post de Hola Juan ',
        name, 
        age
    })
}

const userPut = (req, res = response ) => {
    
    const {id} = req.params
    
    res.json({
        msg: ' Put de Hola Juan ',
        id
    })
}

const userPatch = (req, res = response ) => {
    res.json({
        msg: ' Pathc de Hola Juan '
    })
}

const userDel = (req, res = response ) => {
    res.json({
        msg: ' Del de Hola Juan '
    })
}

module.exports = {
    userGet,
    userGetParams,
    userPost,
    userPut,
    userPatch,
    userDel
}