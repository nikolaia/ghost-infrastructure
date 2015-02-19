set -x HOSTING_URI "http://192.168.59.103/"
set -x MYSQL_USER ghost
set -x MYSQL_PASSWORD supersecret
set -x MYSQL_DATABASE stasj
set -x MYSQL_ROOT_PASSWORD supersecret

docker run --name stasj-mysql \
-e MYSQL_USER=$MYSQL_USER \
-e MYSQL_PASSWORD=$MYSQL_PASSWORD \
-e MYSQL_DATABASE=stasj \
-e MYSQL_ROOT_PASSWORD=$MYSQL_PASSWORD \
-d mysql

docker run --name stasj \
--link stasj-mysql:mysql \
-e MYSQL_USER=$MYSQL_USER \
-e MYSQL_PASSWORD=$MYSQL_PASSWORD \
-e MYSQL_DATABASE=$MYSQL_DATABASE \
-e HOSTING_URI=$HOSTING_URI \
-v (pwd)/ghost:/ghost-override \
-p 80:2368 -d dockerfile/ghost
