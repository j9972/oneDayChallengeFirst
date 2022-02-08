module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,

      validate: {
        isEmailOrEmpty(val, next) {
          if (validateEmail(val)) {
            return next();
          } else {
            return next("email is invalid");
          }
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Users;
};
