const fs = require("fs/promises")

const readContent = async (filename)=>{
    const getInfo =  await fs.readFile(`./${filename}`, `utf8`);
    return { 'name': filename, 'content': getInfo, textLength: getInfo.replace(/ /g,'').length }
}

const writeContent = async (filename,data)=>{
    const sendInfo = await fs.writeFile(`./${filename}`,`${data}`, `utf8`);
    return sendInfo;
}

const compareFiles = async ()=>{
    const allResults = await Promise.all([readContent('secret-message.txt'), readContent('super-secret-message.txt')])
    const winner = allResults[0].textLength > allResults[1].textLength ? allResults[0] : allResults[1];
    const loser = allResults[0].textLength > allResults[1].textLength ? allResults[1] : allResults[0];

    console.log(`Winner is file ${winner.name}`)
    console.log(`Won by having ${winner.textLength-loser.textLength} more characters`)

    writeContent('mega-secret-message.txt',`${winner.content + '\n' + loser.content}`).then((data)=>{
        readContent('mega-secret-message.txt').then((data)=>{
            console.log(data)
        });
    }).catch(err=>{
        console.log(err)
    });

}

compareFiles();