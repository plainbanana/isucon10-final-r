# -*- encoding: utf-8 -*-
# stub: grpc_kit 0.3.9 ruby lib

Gem::Specification.new do |s|
  s.name = "grpc_kit".freeze
  s.version = "0.3.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yuta Iwama".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-05-01"
  s.description = "A kit for creating gRPC server/client".freeze
  s.email = ["ganmacs@gmail.com".freeze]
  s.files = [".gitignore".freeze, ".rspec".freeze, ".rubocop.yml".freeze, ".ruby-version".freeze, ".travis.yml".freeze, "Gemfile".freeze, "LICENSE.txt".freeze, "README.md".freeze, "Rakefile".freeze, "bin/console".freeze, "bin/setup".freeze, "examples/helloworld/helloworld.proto".freeze, "examples/helloworld/helloworld_pb.rb".freeze, "examples/helloworld/helloworld_services_pb.rb".freeze, "examples/helloworld_client.rb".freeze, "examples/helloworld_server.rb".freeze, "examples/interceptors/call_stream.rb".freeze, "examples/interceptors/client_logging_interceptor.rb".freeze, "examples/interceptors/server_logging_interceptor.rb".freeze, "examples/routeguide/routeguide.json".freeze, "examples/routeguide/routeguide.proto".freeze, "examples/routeguide/routeguide_pb.rb".freeze, "examples/routeguide/routeguide_services_pb.rb".freeze, "examples/routeguide_client.rb".freeze, "examples/routeguide_server.rb".freeze, "grpc_kit.gemspec".freeze, "lib/grpc.rb".freeze, "lib/grpc_kit.rb".freeze, "lib/grpc_kit/call.rb".freeze, "lib/grpc_kit/calls.rb".freeze, "lib/grpc_kit/calls/client_bidi_streamer.rb".freeze, "lib/grpc_kit/calls/client_client_streamer.rb".freeze, "lib/grpc_kit/calls/client_request_response.rb".freeze, "lib/grpc_kit/calls/client_server_streamer.rb".freeze, "lib/grpc_kit/calls/server_bidi_streamer.rb".freeze, "lib/grpc_kit/calls/server_client_streamer.rb".freeze, "lib/grpc_kit/calls/server_request_response.rb".freeze, "lib/grpc_kit/calls/server_server_streamer.rb".freeze, "lib/grpc_kit/client.rb".freeze, "lib/grpc_kit/codec.rb".freeze, "lib/grpc_kit/errors.rb".freeze, "lib/grpc_kit/grpc/core.rb".freeze, "lib/grpc_kit/grpc/dsl.rb".freeze, "lib/grpc_kit/grpc/errors.rb".freeze, "lib/grpc_kit/grpc/generic_service.rb".freeze, "lib/grpc_kit/grpc/interceptor.rb".freeze, "lib/grpc_kit/grpc/logger.rb".freeze, "lib/grpc_kit/grpc/stream.rb".freeze, "lib/grpc_kit/grpc_time.rb".freeze, "lib/grpc_kit/interceptor_registory.rb".freeze, "lib/grpc_kit/interceptors.rb".freeze, "lib/grpc_kit/interceptors/client_bidi_streamer.rb".freeze, "lib/grpc_kit/interceptors/client_client_streamer.rb".freeze, "lib/grpc_kit/interceptors/client_request_response.rb".freeze, "lib/grpc_kit/interceptors/client_server_streamer.rb".freeze, "lib/grpc_kit/interceptors/server_bidi_streamer.rb".freeze, "lib/grpc_kit/interceptors/server_client_streamer.rb".freeze, "lib/grpc_kit/interceptors/server_request_response.rb".freeze, "lib/grpc_kit/interceptors/server_server_streamer.rb".freeze, "lib/grpc_kit/method_config.rb".freeze, "lib/grpc_kit/rpc_desc.rb".freeze, "lib/grpc_kit/rpc_dispatcher.rb".freeze, "lib/grpc_kit/rpc_dispatcher/auto_trimmer.rb".freeze, "lib/grpc_kit/rpcs.rb".freeze, "lib/grpc_kit/rpcs/client_bidi_streamer.rb".freeze, "lib/grpc_kit/rpcs/client_client_streamer.rb".freeze, "lib/grpc_kit/rpcs/client_request_response.rb".freeze, "lib/grpc_kit/rpcs/client_server_streamer.rb".freeze, "lib/grpc_kit/rpcs/server_bidi_streamer.rb".freeze, "lib/grpc_kit/rpcs/server_client_streamer.rb".freeze, "lib/grpc_kit/rpcs/server_request_response.rb".freeze, "lib/grpc_kit/rpcs/server_server_streamer.rb".freeze, "lib/grpc_kit/server.rb".freeze, "lib/grpc_kit/session/client_session.rb".freeze, "lib/grpc_kit/session/control_queue.rb".freeze, "lib/grpc_kit/session/drain_controller.rb".freeze, "lib/grpc_kit/session/headers.rb".freeze, "lib/grpc_kit/session/io.rb".freeze, "lib/grpc_kit/session/recv_buffer.rb".freeze, "lib/grpc_kit/session/send_buffer.rb".freeze, "lib/grpc_kit/session/server_session.rb".freeze, "lib/grpc_kit/session/stream.rb".freeze, "lib/grpc_kit/session/stream_status.rb".freeze, "lib/grpc_kit/status_codes.rb".freeze, "lib/grpc_kit/stream/client_stream.rb".freeze, "lib/grpc_kit/stream/server_stream.rb".freeze, "lib/grpc_kit/transport/client_transport.rb".freeze, "lib/grpc_kit/transport/packable.rb".freeze, "lib/grpc_kit/transport/server_transport.rb".freeze, "lib/grpc_kit/version.rb".freeze]
  s.homepage = "https://github.com/ganmacs/grpc_kit".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "A kit for creating gRPC server/client".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<ds9>.freeze, [">= 1.4.0"])
    s.add_runtime_dependency(%q<google-protobuf>.freeze, [">= 3.7.0"])
    s.add_runtime_dependency(%q<googleapis-common-protos-types>.freeze, [">= 1.0.2"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<grpc-tools>.freeze, ["~> 1.18.0"])
    s.add_development_dependency(%q<pry-byebug>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
  else
    s.add_dependency(%q<ds9>.freeze, [">= 1.4.0"])
    s.add_dependency(%q<google-protobuf>.freeze, [">= 3.7.0"])
    s.add_dependency(%q<googleapis-common-protos-types>.freeze, [">= 1.0.2"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<grpc-tools>.freeze, ["~> 1.18.0"])
    s.add_dependency(%q<pry-byebug>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0"])
  end
end
