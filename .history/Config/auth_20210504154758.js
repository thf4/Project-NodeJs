const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const Users = require("../Models/usuario");
//model de usuario

module.exports = (passport) => {
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        await Users.findOne({ email: email }).lean().then((user) => {
          if (!user) {
            return done(null, false, { message: "Está conta não existe " });
          }
          bcrypt.compare(password, user.password, (erro, equalPassword) => {
            console.log(erro)
            if (equalPassword) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Senha incorreta" });
            }
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    await Users.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
