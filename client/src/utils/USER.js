import axios from "axios";


export default {
    // Gets all books
    getUsers: function() {
      return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function(id) {
      return axios.delete("/api/user/" + id);
    },
    // Saves a book to the database
    saveUser: function() {
      return axios.post("/api/user");
    }
  };
  