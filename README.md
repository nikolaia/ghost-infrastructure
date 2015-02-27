# Ghost Infrastructure

WORK IN PROGRESS.

Combining Docker, Docker-compose, Docker-machine and Docker-swarm to make a scalable Ghost infrastructure.

Requires:
* Docker
* Docker-compose
* Docker-machine
* Docker-swarm
* Boot2docker (If you are on mac or windows)

Fix the VIRTUAL_HOST in ```docker-compose.yml``` and ```server_name``` in ```nginx/sites-enabled/default``` to reflect your own boot2docker hostname. Then use ```docker-compose up``` to get started.

## TODO:

* Administration of hosts through Docker Machine.
* Service discovery and automatic updating of haproxy and nginx configs.
* Database clustering
* Database backups
