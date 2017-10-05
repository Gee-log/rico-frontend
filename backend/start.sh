#! /bin/bash

tables=`python manage.py showmigrations`
if [[ $tables == *"webapp"* ]] ; then
  echo RICO: no need to migrate
else
  echo RICO: migrate.py makemigrations --empty webapp
  python manage.py makemigrations --empty webapp
  python manage.py makemigrations
  python manage.py migrate
  python manage.py collectstatic --no-input
fi

ports=`python manage.py dumpdata webapp.port`; chrlen=${#ports} # 32320
echo ports: $chrlen
if [ $chrlen -gt 20000 ]; then
  echo RICO: no need to loaddata
else
  echo RICO: migrate.py loaddata
  python manage.py loaddata data/Wport_data.json
  python manage.py loaddata data/Eport_data.json
  python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'xenoptics')"
fi

#/usr/local/bin/gunicorn backend.wsgi:application -w 2 -b :8000
python manage.py runserver 0:8000

