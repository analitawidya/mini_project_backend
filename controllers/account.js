const account = require ('../model/account')
const jwt = require ('jsonwebtoken')
class controllerAccount { 
static getAccount (req, res) {
    connection.query('SELECT * FROM merchant', function (error, results) {
        // res.status(200).json(results)
      
    res.status(200).json(account.getAccount())
});
}
static createAccount (req, res) {
    const data = req.body
    const {password,name,address,phone_number} = req.body;
    account.create(data)
    const query = "INSERT INTO MERCHANT(password,name,address,join_date,phone_number) VALUES (?,?,?,?,?)";

    connection.query(query, [password,name,address,convertDate(new Date()),phone_number], function (error, results) {
        if (!error) {
            res.send ("secret");
        }
        else {
            res.status(400)
        }
      });
}

static deleteAccount(req, res) {
    const data = req.body;
    if (data) {
        delete data.data
        res.send ('data deleted')
    } else {
        res.status(401).send('data not found')
    }

}

static login (req,res) {
    const dataUser = req.body
    //user input email and password
    // email dan password sama atau tidak dengan database
    if (dataUser.password === data ) {
        //password benar dan akan dikasih token
        const token = jwt.sign({
            name : dataUser.name,
        }, 'success')
        res.status(200).json({token})

    }
    else {
        res.status(401).json({message: 'unauthorized'})
    }

}
}



module.exports = controllerAccount