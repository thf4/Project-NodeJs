const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const Users = require("../Models/usuario");
//model de usuario

module.exports = (passport) => {
  passport.use(
    new localStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        await Users.findOne()({ email: email }).then((usuario) => {
          if (!usuario) {
            return done(null, false, { message: "Está conta não existe " });
          }
          bcrypt.compare(password, usuario.password, (erro, batem) => {
            if (batem) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Senha incorreta" });
            }
          });
        });
      }
    )
  );

  passport.serializerUser((user, done) => {
    done(null, user, id);
  });

  passport.deserializerUser((id, done) => {
    Users.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
