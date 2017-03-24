# dzwiekowa-mapa-wroclawia

## Install & Run

Install the node modules used by the application:

    npm install
    
Build JavaScript bundles for the server- and client-side code using webpack:

    npm run build
    
Run the application:

    npm start
    
You can then go to [localhost:3000](http://localhost:3000/) in your favorite browser to see the Gists.

## Local Development

To speed up local development when working on the source code, you can start the application in watch mode.

You need to run each of the following commands in a separate terminal.

To automatically rebuild the client JavaScript bundle when client source code changes:

    npm run dev:client
    
To automatically rebuild the server JavaScript bundle when client source code changes:

    npm run dev:server
    
To run the server and automatically restart it when the server bundle changes:

    npm run dev:start
    
## License

Published under the [MIT License](LICENSE.md).

Copyright &#xa9; 2017 NoiseOfTheWorld

