const { v4: uuidv } = require('uuid');
const path = require('path')

const fileUpload = (files, validExtension, folder = "") => {

    return new Promise((resolve, reject) => {
        
        const { file } = files;
        let splitedName = file.name.split('.');
        let extension = splitedName[ splitedName.length - 1];
       

        if(!validExtension.includes(extension)){
            return reject(`Not and autorized extension`);
        }

        const tempName = `${uuidv()}.${extension}`
        const uploadPath = path.join(__dirname, `../uploads/`, folder,  tempName); 


    
        file.mv(uploadPath, (err)=> {
        if (err) {
            reject(err);
        }
    
        resolve (uploadPath);
        });
    })

 
}

   module.exports = {
        fileUpload
    }