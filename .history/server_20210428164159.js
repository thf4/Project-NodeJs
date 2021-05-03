const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {});

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
 
};

const kitten = mongoose.model("kitten", kittySchema);

const fluffy = new kitten({ name: "fluffy" })
  fluffy.speak(greeting);


fluffy.save( (err, fluffy) =>{
  if(err)
  return console.error(err);
  fluffy.speak();
})
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
