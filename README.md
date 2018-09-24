# Auth POC

## Prerequirements

1. Install dependencies for all projects
1. Run _auth_

```
cd auth
node index.js
```

3. Run `gateway`

```
cd gateway
yarn start
```

4. Run microservice mock

```
cd api
node src/bin/www
```

## Run commands from `app-client`

1. `cd app-client`
1. Get jwt with `node index.js fetchJWT`
1. Run request with `node index.js requestToApiGateway test`
