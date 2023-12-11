const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file using protoLoader
const packageDefinition = protoLoader.loadSync('greeter.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
// console.log('packageDefinition', packageDefinition)
// Get the Greeter service from the loaded package
const greeter = grpc.loadPackageDefinition(packageDefinition).greet.Greeter;
console.log('greeter', greeter)
// Create a client with the Greeter service
const client = new greeter('localhost:5105', grpc.credentials.createInsecure());

// Create a request with the name value
const request = {value: 'World', age: 20};

// Call the sayHello method on the client
client.sayHello(request, (error, response) => {
  if (!error) {
    // Iterate over the names in the response and print them to the console
    response.names.forEach((name) => {
      console.log('name', name);
    });
  } else {
    // Log the error if any
    console.error(error);
  }
});
