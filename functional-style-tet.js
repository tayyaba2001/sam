// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create a message variable that prepends "%c" to the text.
    let message = "%c" + txt;
    
    // Create a style variable using a template literal.
    let style = `color: ${color};`;
    
    // Append background style.
    style += `background: ${background};`;
    
    // Append font-size style.
    style += `font-size: ${fontSize};`;
    
    // Log the message with the style.
    console.log(message, style);
  }
  
  // Task 2: Build another console log message generator.
  function celebrateStyler(reason) {
    // Set a fontStyle variable.
    let fontStyle = "color: tomato; font-size: 50px";
    
    // Check the reason and log the corresponding message.
    if (reason == "birthday") {
      console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
    } else {
      // In this branch, we can log a default message.
      console.log(`%cCelebration time!`, fontStyle);
    }
  }
  
  // Task 3: Run both the consoleStyler and celebrateStyler functions
  // Invoke consoleStyler with the specified arguments.
  consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
  // Invoke celebrateStyler with the "birthday" reason.
  celebrateStyler('birthday');
  
  // Task 4: Insert a congratulatory and custom message by combining both functions.
  function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // First, call consoleStyler with provided styling and text.
    consoleStyler(color, background, fontSize, txt);
    // Then, call celebrateStyler with the reason.
    celebrateStyler(reason);
  }
  
  // Invoke styleAndCelebrate with the specified arguments.
  styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
  