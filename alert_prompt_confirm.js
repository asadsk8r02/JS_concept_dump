alert("Enter the value of a...!!!");

let a = prompt("Enter a value");
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));

let write = confirm("Do you want to write to the page?");
if (write) {
    document.write(a);
} else {
    document.write("Please allow me to write");
}

 
