const fs = require ('fs')

class account {
static getAccount () {
    const data = JSON.parse (fs.readFileSync ('account.json') )
    return data

}


static create(data) {
    const allData = JSON.parse(fs.readFileSync('account.json'))
    allData.push(data)
    fs.write('member.json', JSON.stringify(allData,null,2))

}
static delete(data) {
    const allData = JSON.parse(fs.readFileSync('account.json'))
    allData.push(data)
    fs.write('member.json', JSON.stringify(allData,null,2))

}
}




module.exports = account
