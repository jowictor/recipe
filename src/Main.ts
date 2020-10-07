import * as http from 'http';
import App from './App';

async function main(): Promise<void> {
    try {

        App.set('port', getExposePort());
        const server = http.createServer(App);

        server.listen(getExposePort());
        server.on('error', onError);
        server.on('listening', onListening);

        function normalizePort(val: number | string): number | string | boolean {
            try {
                const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;

                if (isNaN(port)) {
                    return val;
                }

                if (port >= 0) {
                    return port;
                }

                return false;

            } catch (ex) {
                exception();
            }
        }

        function onError(error: NodeJS.ErrnoException): void {
            try {
                if (error.syscall !== 'listen') throw error;


                const bind = (typeof getExposePort() === 'string') ? 'Pipe ' + getExposePort() : 'Port ' + getExposePort();
                switch (error.code) {
                    case 'EACCES':
                        console.error(`${bind} requires elevated privileges`);
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error(`${bind} is already in use`);
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            } catch (error) {
                exception();
            }
        }

        function onListening(): void {
            let addr = server.address();
            let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
            console.log(`Listening on ${bind}`);
        }



        function getExposePort() {
            return normalizePort(process.env.PORT || 3000);
        }

    } catch (error) {
        exception();
    }
}


function exception(): void {
    process.exit(666);
}

main();
