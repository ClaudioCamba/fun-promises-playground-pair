const fs = require("fs/promises")

function findPet(name) {
    const myPromise = new Promise((resolve, reject) => {
        return fs.readFile(`${__dirname}/../data/${name}.json`, `utf8`, (err,data) => {
            data ? resolve(data) : reject(err); 
        }).then((pets)=>{
            resolve(JSON.parse(pets));
        }).catch(()=>{
            resolve("soz couldnt find snoopy :(");
        })
    });

    return myPromise;

}
module.exports = findPet;

/*

In your repo you will see there is a folder called data, this should contain some json files.

Your task is to create a function that will accept a given pet name, and read the file that matches the given name and return a promise that will either resolve with the appropriate pet data, or if you cannot find the pet file should return a promise that will resolve with a message.

You may want to use the tests to guide what your function should return.

*/
