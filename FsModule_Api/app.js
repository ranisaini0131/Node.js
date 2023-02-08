const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


//write file
fs.writeFileSync(filePath, 'This is as simple text file');

//read file
fs.readFile(filePath, "utf-8", (err, item) => {
    console.log(item);
});

//update file

fs.appendFile(filePath, "and file name is apple.txt", (err) => {
    if (!err) console.log("file is updated");
});

//rename file
fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
    if (!err) console.log("file name is updated");
});

//delet file
fs.unlinkSync(`${dirPath}/fruit.txt`); 