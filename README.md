# NodeJS-React-MySQL Skeleton
Table des matières
-----
1. Présentation
2. Prérequis
3. Installation
4. Lancement
5. Licence

Presentation
-----
Ce repo contient une squelette d'application basé
sur les technologies suivantes :
* [React](https://reactjs.org/)
* [React-templates](https://github.com/wix/react-templates)
* [React-contextual](https://github.com/drcmda/react-contextual)
* [NodeJS](https://nodejs.org/en/)
* [Express](http://expressjs.com/fr/)
* [MySQL](https://www.mysql.com/fr/)

La structure contient les outils de build de l'application, l'architecture des dossiers, ainsi qu'une simple application de demonstration présentant un système d'inscription/authentification.

Prerequis
-----
* [nodeJS(>=9.3.0) & npm](https://nodejs.org/en/)
* [MySQL (>=5.6.0)](https://www.mysql.com/fr/)

Installation
Il vous faudra d'abord créer un fichier .env dans le dossier config. Pour ce faire, dupliquez le fichier .env-sample et remplissez les differentes clés à l'interieur de celui ci comme ceci :
* PORT = e port souhaité pour lancer le serveur. ex: 8000
* SESSION_SECRET = une chaine de caractères quelconque
* TOKEN_SECRET = une chaine de caractères quelconque
* APP_URL = l'adresse de votre application. Dans un environnement de développement : http://localhost:8000 par exemple
* DB_HOST = votre hote de BSS MySQL. ex: "localhost"
* DB_NAME = le nom de votre base de données. Afin d'utiliser l'application de démonstration, rentrez "node_react_sample_db"
* DB_USER = votre nom d'utilisateur mysql. ex: "root"
* DB_PASSWORD = votre mot de passe mysql. ex: "toto123"

Ensuite, en ligne de commande :
```
cd/dans/le/projet
npm install
npm run buildDB
```

Lancement
Ouvrez deux lignes de commande et rentrez-y respectivement, après avoir navigué dans le dossier du projet :
```
npm run dev

npm run watch
```
-----
Licence
-----
MIT License

Copyright (c) 2018 Loïc Pennequin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
