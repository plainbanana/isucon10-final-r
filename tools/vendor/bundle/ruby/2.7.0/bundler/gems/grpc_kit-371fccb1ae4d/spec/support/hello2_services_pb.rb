# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: hello2.proto for package 'hello2'

require 'grpc'
require_relative 'hello2_pb'

module Hello2
  module Greeter
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'hello2.Greeter'

      rpc :HelloRequestResponse, Request, Response
      rpc :HelloServerStreamer, Request, stream(Response)
      rpc :HelloClientStreamer, stream(Request), Response
      rpc :HelloBidiStreamer, stream(Request), stream(Response)
    end

    Stub = Service.rpc_stub_class
  end
end
