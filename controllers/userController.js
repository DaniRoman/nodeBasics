const { request, response } = require('express')
const bycript = require('bcrypt')

const User = require('../models/user')

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

const userPost = async (req, res = response ) => {
    
    const {name, email, password, rol, ...rest} = req.body;
    
    const user = new User({name, email, password, rol});

        const existEmail = await User.findOne({ correo })
        if( correo ){
            
            return res.status(400).json({
                msg: "email is registered"
            })
        }

        const salt = bycript.genSaltSync();
        user.password = bycript.hashSync(password, salt)

    try {

        await user.save();
        res.json({
            msg: ' Post de Hola Juan ',
            user
        })

    } catch (err) {
        throw new Error(`El error es ${err}`);
    }
   

   
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