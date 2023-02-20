
const { response } = require('express');
const { fileUpload } = require('../helpers')


const loadFile = async ( req, res = response) => {
  
  const validExtension = ['jpg', 'png', 'gif']


    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
      res.status(400).json({msg:'No files were uploaded.'});
      return;
    }

    const filePath = await fileUpload(req.files, validExtension);
    res.json({
      msg: filePath
    })
    
  
}

module.exports = {
  loadFile
}