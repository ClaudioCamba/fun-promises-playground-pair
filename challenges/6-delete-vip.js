const fs = require("fs/promises")

const readContent = async (filename)=>{
    const getInfo =  await fs.readFile(`./${filename}`, `utf8`);
    return { 'name': filename, 'content': getInfo, textLength: getInfo.replace(/ /g,'').length }
}

const getInfo = async () => {
    const allResults = await readContent('vip-list.txt');
    console.log(allResults);
}

getInfo();