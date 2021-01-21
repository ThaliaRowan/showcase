// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/names", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Hubnames.findAll({}).then(function(dbHubnames) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbHubnames);
    });
  });

  // POST route for saving a new todo
  app.post("/api/names", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Hubnames.create({
      gitname: req.body.gitname,
      searchCount: req.body.searchCount
    }).then(function(dbHubnames) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbHubnames);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/names/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Hubnames.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbHubnames) {
      res.json(dbHubnames);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/names", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Hubnames.update({
      gitname: req.body.gitname ,
      searchCount: searchCount
    }, {
      where: {
        id: req.body.id
                
      }
    }).then(function(dbHubnames) {
      res.json(dbHubnames);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
