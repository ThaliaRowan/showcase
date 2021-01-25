module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  email: {
			type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
  	},
	 
	});
	
	return User;
}