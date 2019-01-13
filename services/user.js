const fs = require('fs');


const loadLog = (fileName) => {
    return new Promise((resolve, reject) => {
            fs.readFile(`./users/${fileName}.json`, 'utf-8', (err, data) => {
                if(err) reject(err);
                else resolve(JSON.parse(data));
            });
    });
};

const writeLog = (fileName, writeData) => {
    return new Promise ((resolve, reject) => {

            newData = JSON.stringify(writeData);
            fs.writeFile(`./users/${fileName}.json`, newData, (err) => {
                if(err) reject(err);
                else resolve({message: `Write to ${fileName} successful!`});
            });
    });
};


module.exports = {
    loadLog,
    writeLog,
}