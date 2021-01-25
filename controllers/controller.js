const db = require("../config/db.config.js");
const User = db.User;


exports.createUser = (req, res) => {
    let user = {};

    try{
        // Building Customer object from upoading request's body
        user.email = req.body.email;
        user.password = req.body.password;
      
    
        // Save to MySQL database
        User.create(user, 
                          {attributes: ['id', 'email', 'password']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getUser = (req, res) => {
    User.findByPk(req.params.id, 
                        {attributes: ['id', 'email', 'password']})
        .then(user => {
          res.status(200).json(user);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}


exports.users = (req, res) => {
    // find all Customer information from 
    try{
        User.findAll({attributes: ['id', 'email', 'password']})
        .then(users => {
            res.status(200).json(users);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteUser = async (req, res) => {
    try{
        let userId = req.params.id;
        let user = await User.findByPk(userId);

        if(!user){
            res.status(404).json({
                message: "Does Not exist a Customer with id = " + userId,
                error: "404",
            });
        } else {
            await user.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a user with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.updateUser = async (req, res) => {
    try{
        let user = await User.findByPk(req.body.id);
    
        if(!user){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a user with id = " + userId,
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                email: req.body.email,
                password: req.body.password
            
            }
            let result = await User.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id', 'email', 'password', 'age']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a user with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a customer with id = " + req.params.id,
            error: error.message
        });
    }
}