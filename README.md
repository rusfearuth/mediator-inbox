# Aries inbox server

This solution allows you to run separated the HTTP inbox server for receiving incoming messages from other agents. `It cannot be used as solution for PRODUCTION.`  

**NOTE**: *This inbox server can be used only for single agent. Also, it doesn't provide any storage for saving incoming messages. All messages are saved in memory only. All messages will be lost after the inbox server is restarted.*

## Getting started

Here you will find how to run and use this solution.

### Manual

If you want to run this server without [Docker](https://www.docker.com/), you will need to install [Node.js](https://nodejs.org/en/) first. The you should use next commands:

```bash
# Install all required dependencies
$ yarn

# Run the server in dev mode
$ yarn run dev

# Run the server in prod mode
$ yarn run prod
```

### Docker

If you want to use [Docker](https://www.docker.com/) for starting the inbox, you will be able to use the follow commands.

```bash
$ docker compose up inbox-dev
```
The `inbox-dev` will start the inbox server in dev mode. It means that you can get access to this server by means http://localhost:5050. Also, this mode provides an access to the your locally run instance of the inbox server by means [Ngrok](https://ngrok.com). This case is useful for development purposes.

```bash
$ docker compose up inbox-prod
```
The `inbox-prod` will start the inbox server in the prod mode. It means that you can get access to this server by means http://0.0.0.0:8080. This case can be used for case when you run this [Docker](https://www.docker.com/) on a public server.

## How to use it

After the inbox server instance was run, you will need to set up URL of your the inbox server to the endpoint of the Aries agent which will use it.

## Endpoints

### Invitation 
`GET` **/**

TBD

### Register incoming messages
`POST` **/**

This endpoint is used by other agents for sending messages to your agent.

### Polling saved messages
`GET` **/poll/pending**

This endpoint returns the JSON array of new pending messages for the your agent.
