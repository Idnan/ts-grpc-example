// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');

function serialize_greeter_HelloRequest(arg) {
  if (!(arg instanceof greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloRequest(buffer_arg) {
  return greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloResponse(arg) {
  if (!(arg instanceof greeter_pb.HelloResponse)) {
    throw new Error('Expected argument of type greeter.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloResponse(buffer_arg) {
  return greeter_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
  sayHello: {
    path: '/greeter.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.HelloRequest,
    responseType: greeter_pb.HelloResponse,
    requestSerialize: serialize_greeter_HelloRequest,
    requestDeserialize: deserialize_greeter_HelloRequest,
    responseSerialize: serialize_greeter_HelloResponse,
    responseDeserialize: deserialize_greeter_HelloResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
