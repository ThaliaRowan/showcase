import axios from "axios";

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://api.github.com/users/"+query+"/repos"
    );
  }
};

