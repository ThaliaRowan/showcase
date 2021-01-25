const env = {
    database: 'signup',
    username: 'root',
    password: 'rzQ)2D?/',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  };
  
  module.exports = env;