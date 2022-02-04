const fs = require('fs');
const dataSource = require('emoji-datasource');
const jsonData = {};

dataSource.forEach(source => {
    const { unified, short_name} = source;
    hexArray = unified.split('-').map(hexStr => parseInt(`0x${hexStr}`, 16));
    const codeUnit = String.fromCodePoint(...hexArray);
    jsonData[short_name] = codeUnit;
});

function writeFile(path, data) {
    const jsonStr = JSON.stringify(data);
    fs.writeFile(path, jsonStr, (err) => {
      if (err) rej(err);
      if (!err) {
        console.log('Success output to json!!');
      }
    });
}

function main(path, input) {
    writeFile(path, input);
}

main(`data/datasource.json`, jsonData);