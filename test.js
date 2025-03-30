var str = "Hello";
str.match("jello");
try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }

    function add(a, b) {
        console.log(a + b)
      }
    
      add(3, "4");