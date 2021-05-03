const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence" });
console.log(silence.name);

kittySchema.methods.speak = () => {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
 return greeting
};

const kitten = mongoose.model("kitten", kittySchema);

const fluffy = new kitten({ name: "sdsds" })
  fluffy.speak();

fluffy.save( (err, fluffy) =>{
  if(err)
  return console.error(err);
  fluffy.speak();
})
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
