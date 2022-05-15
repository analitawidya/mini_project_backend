const product = require ('../model/product')
class controllerProduct { 
static getProduct (req, res) {
    connection.query('SELECT * FROM product', function (error, results) {
        
    res.status(200).json(account.getProduct())
});
}
static createProduct (req, res) {
    const data = req.body
    const {name,quantity,price} = req.body;
    account.product(data)
    const query = "INSERT INTO MERCHANT(name,quantity,price) VALUES (?,?,?)";

    connection.query(query, [name,quantity,price], function (error, results) {
        if (!error) {
            res.send ("secret");
        }
        else {
            res.status(400)
        }
      });
}

static deleteProduct(req, res) {
    const data = req.body;
    if (data) {
        delete data.data
        res.send ('product deleted')
    } else {
        res.status(401).send('product not found')
    }

}

static updateProduct (req,res){
    const data = req.body
    const {name,quantity,price} = req.body;
    account.product(data)
    const query = "INSERT INTO MERCHANT(name,quantity,price) VALUES (?,?,?)";

    connection.query(query, [name,quantity,price], function (error, results) {
        if (!error) {
            res.send ("secret");
        }
        else {
            res.status(400)
        }
      });
}
}





module.exports = controllerProduct