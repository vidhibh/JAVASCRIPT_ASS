let balance = 1000;
class UserError extends Error {}
class PaymentError extends Error {}
class ServerError extends Error {}
class EmailError extends Error {}
function processOrder(type) {
  try {
    if (type === "user") throw new UserError("Invalid user input");
    if (type === "payment") throw new PaymentError("Payment failed");
    if (type === "server") throw new ServerError("Server down");
    if (type === "email") throw new EmailError("Email not sent");
  } catch (err) {
    console.log(err.name + ":", err.message);
  }
}
processOrder("user");
processOrder("payment");
processOrder("server");
processOrder("email");
// Task 4: fetchData
function fetchData(url) {
  try {
    if (!url.startsWith("https")) {
      throw new Error("Invalid URL");
    }
    console.log("Fetching data from", url);
  } catch (err) {
    console.log(err.message);
  }
}

fetchData("http://example.com");
fetchData("https://example.com");

// Task 5: validateUser
function validateUser(user) {

  if (user.username === "") {
    console.log("Error: Username cannot be empty");
  }

  if (user.age <= 0) {
    console.log("Error: Age must be a positive number");
  }
}

let userInput = {
  username: "",
  age: -2
};

validateUser(userInput);



// Task 6: readFile simulation
function readFile(filePath) {
  try {
    console.log("Opening file:", filePath);

    if (filePath !== "data.txt") {
      throw new Error("File not found");
    }

   
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Releasing IO resources");
  }
}

readFile("test.txt");
readFile("data.txt");


// Task 7: parseJson
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return "Invalid JSON";
  }
}

console.log(parseJson('{"name":"Vidhi"}'));
console.log(parseJson('{name:"Vidhi"}'));
