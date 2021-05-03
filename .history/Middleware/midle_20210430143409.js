const {name , slug} = req.body
if (
  !name ||
  typeof name == undefined ||
  name == null
) {
  erros.push({ text: "Name invalid!" });
}
if (
  !slug ||
  typeof slug == undefined ||
  slug == null
) {
  erros.push({ text: "Slug invalid!" });
}
if (name.length < 2) {
  erros.push({ text: "Name small" });
}
if (erros.length > 0) {
  res.render("/admin/addcategorias", { erros: "erros "});
}

module.exports = Erros;