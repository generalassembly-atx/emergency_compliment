function Compliment(object) {
  this.compliment = object.compliment;
  Compliment.all.push(this);
}

Compliment.all = [];


module.exports = Compliment;
