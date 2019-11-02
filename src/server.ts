import 'dotenv/config';
import * as grpc from 'grpc';

import { protoIndex } from './proto';
import greeterHandler from './handlers/greeter';

protoIndex();

const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
    // create a new gRPC server
    const server: grpc.Server = new grpc.Server();

    // register all the handler here...
    server.addService(greeterHandler.service, greeterHandler.handler);

    // define the host/port for server
    server.bindAsync(
        `0.0.0.0:${ port }`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
        },
    );

    // start the gRPC server
    server.start();
};

startServer();
