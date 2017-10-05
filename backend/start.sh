#! /bin/bash

tables=`./manage.py showmigrations`
if [[ $tables == *"webapp"* ]] ; then
  echo RICO: no need to migrate
else
  echo RICO: migrate.py makemigrations --empty webapp
  ./manage.py makemigrations --empty webapp
  ./manage.py makemigrations
  ./manage.py migrate
  ./manage.py collectstatic
fi

ports=`./manage.py dumpdata webapp.port`; chrlen=${#ports} # 32320
echo ports: $chrlen
if [ $chrlen -gt 20000 ]; then
  echo RICO: no need to loaddata
else
  echo RICO: migrate.py loaddata
  ./manage.py loaddata data/Wport_data.json
  ./manage.py loaddata data/Eport_data.json
fi

/usr/local/bin/gunicorn backend.wsgi:application -w 2 -b :8000

