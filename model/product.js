const fs = require ('fs')

class product {
static getProduct () {
    const data = JSON.parse (fs.readFileSync ('product.json') )
    return data

}


static create(data) {
    const allData = JSON.parse(fs.readFileSync('product.json'))
    allData.push(data)
    fs.write('member.json', JSON.stringify(allData,null,2))

}
static delete(data) {
    const allData = JSON.parse(fs.readFileSync('product.json'))
    allData.push(data)
    fs.write('member.json', JSON.stringify(allData,null,2))

}

static update(data) {
    const allData = JSON.parse(fs.readFileSync('product.json'))
    allData.push(data)
    fs.write('member.json', JSON.stringify(allData,null,2))
}
}



module.exports = product
