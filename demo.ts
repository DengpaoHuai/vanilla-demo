type TupleDemo = [string, number];

function tupleDemo(): TupleDemo {
  return ["Hello", 1];
}

const demo = tupleDemo();

demo[1].toString().toUpperCase();
