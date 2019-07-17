const fs= require('fs');

fs.writeFile('.data.html', `\n Hello, this file has just been created \n`, 'utf8',(err)=>{


if(err) return err;

console.log("This file has just been saved");
});

fs.appendFile('.data.html', `\n Extra data appended to this file \n`, 'utf8',(err)=>{


    if(err) return err;
    
    console.log("This file has just been saved");
    });