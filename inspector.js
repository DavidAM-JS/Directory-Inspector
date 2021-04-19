const fs = require('fs');
const path = require('path');

const directory = (process.argv[2] === undefined) ? process.cwd() : process.argv[2];

(function showFiles(directory) {
    try {
        const files = fs.readdirSync(directory);
        if (files.length > 0) {
            files.forEach((element) => {
                let file = path.join(directory, element)
                if (fs.statSync(file).isDirectory()) {
                    console.log(`${element}/`);
                } else {
                    console.log(element);
                }
            })
        };
    } catch (error) {
        if(error.code === 'ENOENT'){
          console.log('The directory does not exists');
        }
    }
})(directory);

