## Configure Catapult Rest Server Host

Search `location.hostname` in `catapult-chain-app.js` and replace your catapult rest server host.

### you need to start it in some webserver:

* python 3.x:
```
#!bash
python -m http.server
```

* python 2.x
```
#!bash
python -m SimpleHTTPServer
```

## Powered by

* [Docker Hub techbureau catapult-block-explorer](https://hub.docker.com/r/techbureau/catapult-block-explorer/)
* [catapult-service-bootstrap](https://github.com/tech-bureau/catapult-service-bootstrap/blob/master/docker-compose-with-explorer.yml)
* Thank [planethouki](https://github.com/planethouki) for point out websocket issue.
