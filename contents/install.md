# INSTALL
## Node.js 15.x

```sh
$ sudo curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

## Angular

```sh
$ sudo npm install -g @angular/cli
```

## New app

```sh
$ ng new <appname>
```

## Serve app

```sh
$ ng serve
```

## Conda env (to download images using jupyter)

```sh
$ conda create -n lol mysqlclient python==3.8 -y
```

#### Libs:

```sh
$ pip install appdirs bokeh boto boto3 cython django django-allauth django-cors-headers django-filter django-rest-auth djangorestframework dtw==1.3.3 ec2-metadata gensim gunicorn imgaug ipykernel jupyter_console jupyter_contrib_nbextensions jupyter-themer jupyter_dashboards jupyter_full_width jupyterhub jupyterlab keras marshmallow matplotlib mysql-connector-python nltk numpy opencv-python openpyxl pandas pdf2image pypng regex scipy stop-words symspellpy tensorflow==2.4.0rc4 tqdm wazeroutecalculator wfdb xlrd xlwt
```

#### Run jupyter lab:

```sh
$ jupyter lab
```

## Install bootstrap, jquery and popperjs

```sh
$ sudo npm i bootstrap jquery @popperjs/core
```

## [angular.json]

```js
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

## HttpClientModule error.

This likely means that the library (@angular/common/http) which declares HttpClientModule has not been processed correctly by ngcc.

```sh
$ sudo npm cache verify
```

## Finished

The project just can't be done, because the RIOT API and requests can't be sent from Angular.