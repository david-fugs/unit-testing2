function sum(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return 404;
  }else{
    return a + b;

  }
    
  }
module.exports = sum;

