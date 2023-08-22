//  The try and catch contruct may have one more code clause -  Finally

// If it exists it runs in all cases: i.e finally will run irrespective of the error.
// after try, if there were no errors
// after catch, if there were errors

// If there is a return in Try, Finally is executed just before the control returns to the outer code

try {
  let a = 0;
  console.log(program); // error in try which is okay
  console.log("Program ran successfully");
} catch (error) {
  console.log("This is an error");
  console.log(p); // error in catch which should not be present
} finally {
  // when there is an error in catch block also, finally will still run by normal console.log() will not run

  console.log("I am a good boy finally");
  //  examples of finally use:
  //  close the file
  //  exit the loop
  // write to log file
}

console.log("I am a good boy plain"); // this won't show as there is an error in catch block which was supposed to capture the error istead the catch block itself is having error.

// ======================================================================

const f = () => {
  try {
    let a = 0;
    // console.log(program); // error in try which is okay
    console.log("Program ran successfully");
    return      // even when we are passing return, finally will execute. In normal case normal console.log would not execute.
  } 
  catch (error) {
    console.log("This is an error");
    console.log(p); // error in catch which should not be present
  } 
  finally {
    console.log("I am a good boy finally");
  }
    // console.log("I am a good boy normal")
};

f()
console.log("End")