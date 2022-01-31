import * as fs from 'fs'

export const readDB = () => {
    let rawdata = fs.readFileSync('src/db/database.json');
    return JSON.parse(rawdata.toString());
}

