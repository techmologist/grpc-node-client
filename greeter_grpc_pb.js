// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');

function serialize_greeter_Name(arg) {
  if (!(arg instanceof greeter_pb.Name)) {
    throw new Error('Expected argument of type greeter.Name');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_Name(buffer_arg) {
  return greeter_pb.Name.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_NameList(arg) {
  if (!(arg instanceof greeter_pb.NameList)) {
    throw new Error('Expected argument of type greeter.NameList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_NameList(buffer_arg) {
  return greeter_pb.NameList.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/greeter.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.Name,
    responseType: greeter_pb.NameList,
    requestSerialize: serialize_greeter_Name,
    requestDeserialize: deserialize_greeter_Name,
    responseSerialize: serialize_greeter_NameList,
    responseDeserialize: deserialize_greeter_NameList,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
