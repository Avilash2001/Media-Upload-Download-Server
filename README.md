# Media Upload Download Server

This code represents a medium to upload your media to a server where this app will be hosted and Serve them. \
Currently Supported medias collectively are image, Video, Audio, others
There are a limited number of extensions that are configured for this code to work perfectly on, as i didn't do proper research to all the file extensions supported on a media

>URL for serving: `<protocol>://<hostAddress>:<port>/srv/<key>` \
>Example: `http://localhost:3000/srv/hJ9Hdb14`

There is also a Uploading test site provided which is accessible through

>URL: `<protocol>://<hostAddress>:<port>/test` \
>Example: `http://localhost:3000/test`

___

## Setting Environment Variables

This Variables are to be placed into `.env` and `config.js` files on the root directory of the app after creation of the files

### Understanding the Variables

|  Var Name   | Var Definition                                                                                   |  Var In   | Required |
| :---------: | :----------------------------------------------------------------------------------------------- | :-------: | :------: |
|    PORT     | Port Number on which the server will be running on                                               |   .env    | **YES**  |
| MONGODB_URI | URI String to Connecting to MongoDB for URL, file registration                                   |   .env    | **YES**  |
| hostAddress | This Variable will be responsible for making the url that will be serving the file to a end user | config.js | **YES**  |
|             |                                                                                                  |           |

### Configuring the `.env` file

Template:

```dotenv
PORT=                   # The port that the app will hosted on
MONGODB_URI=            # The URI string to the mongoDB Database
```

### Configurring the `config.js` file

Template:

```js
require("dotenv/config");
module.exports = {
    hostAddress: "<protocol>://<Your Host Address>:" + process.env.PORT + "/",
};
```

___

## Code Start up

1. Clone the Code to your desired Location.
2. Install the dependencies with package manager of your liking.
   1. Installing Using Yarn
      1. Run the command 'yarn' at the root of the repository
      2. After Installation, configure the '.env' file and 'config.js' files according to the Environment Set up guide
      3. Run the command 'yarn start' to start the app.
   2. Installing using NPM
      1. Run the command 'npm install' at the root of the repository
      2. After Installation, configure the '.env' file and 'config.js' files according to the Environment Set up guide
      3. Run the command 'npm start' to start the app.
3. After the app starts, navigate to '/test' route followed after your apps hosted domain.
4. Test for if the file upload, Download is working or not.
5. If they are working well and good, else create an issue with the steps to replicate the issue and any error logs for help.

## More Updates incoming in future

>- [ ] Code Documentation pending
___