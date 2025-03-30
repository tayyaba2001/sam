console.log('Hello');
function consoleLog(val) {
    console.log(val);
    return val;
  }

 consoleLog('hello') 

 function doubleIt(num) {
    return num * 2;
  }
  function objectMaker(val) {
    return {
      prop: val
    };
  }

  console.log(objectMaker(doubleIt(100)).toString());
  console.log(objectMaker(doubleIt(100)));
  console.log(doubleIt(10).toString());
