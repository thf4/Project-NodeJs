function mensagens(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
}

module.exports = (app) =>{app.use(mensagens}
