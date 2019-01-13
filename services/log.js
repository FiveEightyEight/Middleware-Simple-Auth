const fs = require('fs');



const loadLog = (fileName) => {
    return new Promise((resolve, reject) => {
            fs.readFile(`../logs/${fileName}.json`, 'utf-8', (err, data) => {
                if(err) reject(err);
                else resolve(JSON.parse(data));
            });
    });
};

const writeLog = (fileName, writeData) => {
    return new Promise ((resolve, reject) => {

            newData = JSON.stringify(writeData);
            fs.writeFile(`../logs/${fileName}.json`, newData, (err) => {
                if(err) reject(err);
                else resolve({message: 'Write Success'});
            });
    });
};

const appendToLogFile = (fileName, stringData) => new Promise((resolve, reject) => {
    fs.appendFile(`./logs/${fileName}.txt`, `${stringData}\r\n`, (err) => {
    if (err) reject(err);
    resolve('Saved');
  });
  });


module.exports = {
    loadLog,
    writeLog,
    appendToLogFile,
}