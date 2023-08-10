const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve("Script loaded");
    };
    script.onerror = () => {
      reject("There is some issue");
    };
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
);

p1.then((value) => {
  console.log(value);
  return loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
  );
}).then((value) => {
    console.log("Final script loaded");
}).catch((error) => {
    console.log("Sorry we are having issues");
});
