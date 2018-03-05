# TUTOR

A development of frontend and backend side (without Rico app) before deploying to Rico repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software.

```
nodejs 8.6.0^
https://nodejs.org/en/

python 2.7^
https://www.python.org/downloads/

pip 
https://pip.pypa.io/en/stable/installing/

virtualenv
https://virtualenv.pypa.io/en/stable/installation/
```

### Installing

```
git clone https://suraneti@bitbucket.org/xenoptics/tutor.git
```

```
cd tutor
```

```
/tutor$ virtualenv {environment name} 

*note for this instruction will name env.
```

```
/tutor$ env\Scripts\activate (cmd Windows)

/tutor$ source env/bin/activate (terminal macOS) 
```

```
/tutor$(env) pip install -r requirement.txt
```

```
/tutor$ cd frontned
```

```
/tutor/frontend$ npm install
```

## Running

1. You have to make local machine MySQL database and name it webapp_rico.
2. Loading ports data by root in "tutor/backend$ python manage.py loaddata .\data\Eport_data.json".
3. Repeat step 2. with "Wport_data.json".
4. Running backend server root in "tutor/backend$ python manage.py runserver".
5. If it's ok, you can access 'http://localhost:8000/'.
6. Open a new terminal to run frontend side.
7. Root in "tutor/frontned$ ng serve".
8. If it's ok, you can access 'http://localhost:4200/'.

## Deployment

```
/tutor/frontend$ ng build 
(development version)

/tutor/frontend$ ng build --prod 
(production version)
```

## Built With

* [Angular4](https://angular.io/) - The web framework used
* [Npm](https://www.npmjs.com/) - Dependency Management
* [Django](https://www.djangoproject.com/) - The backend framework used
* [Djangorestframework](http://www.django-rest-framework.org/) - The backend api framework used
* [Pip](https://pypi.python.org/pypi/pip) - Package Management

## Versioning

Stable with branch 'origin/dev-plan-stable'.

## License

This project is licensed under the MIT License.
