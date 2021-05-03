const erros = [];
if (
  !req.body.name ||
  typeof req.body.name == undefined ||
  req.body.name == null
) {
  erros.push({ text: "Name invalid!" });
}
if (
  !req.body.slug ||
  typeof req.body.slug == undefined ||
  req.body.slug == null
) {
  erros.push({ text: "Slug invalid!" });
}
if (req.body.nome.length < 2) {
  erros.push({ text: "Name small" });
}
if (erros.length > 0) {
  res.render("/admin/addcategorias", { erros: erros });
}

module.exports = Erros;