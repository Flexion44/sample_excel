# sample_excel
Un projet permettant d'initier des traitements sur des fichiers excel 

# Prérequis :

Avoir installé nodejs et git sur sa machine

# 1 - Téléchargement du projet en local

Pour télécharger le code en local, ouvrir un terminal depuis le dossier où l'on souhaite créer le projet. Dans le terminal taper ```git clone https://github.com/Flexion44/sample_excel```

Un dossier s'appelant **sample_excel** doit se créer dans le dossier parent. Pour l'ouvrir, taper ```cd sample_excel``` depuis le terminal. 

# 2 - Installation des dépendances

Vu qu'il n'est pas conseillé d'uploader le dossier node_modules dans github, il faut télécharger la librairie en local pour pouvoir faire appel au programme contenu dans le fichier _index.js_. Ainsi depuis le dossier **sample_excel**, taper :  ```npm i``` ou ```npm install```

# 3 - Lancement du script de création d'un excel

Afin de lancer le script, il faut taper ```node index.js``` dans son terminal depuis le dossier où est stocké le fichier _index.js_. 

# Explication du script

Ce script a pour fonction de créer un fichier excel depuis la librairie excelJS et de renseigner les informations de 5 personnes dans un tableau simple. Ce script peut servir de base pour la génération d'excel plus complexe.

