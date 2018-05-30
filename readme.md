Exemple code asynchrone
=======================

Plusieurs versions progressives.

Charger une version avec

```git checkout <tag>```

où `tag` peut prendre comme valeur :

* `v0` : version initiale
* `v1` : version avec fichier à charger passer dans l'url
  + gestion erreur en cas de fichier non trouver
  à tester en chargeant en parallèle un "gros" et un "petit" fichier
* `v1.1` : version avec lecture de fichier synchrone pour comparaison avec la version précédente  
* `v2` : callback hell...
* `v2.1` : callback hell... utilisation de callbacks nommés
  les callbacks utilisés sont définis dans un module à part
* `v2.2` : callback hell... utilisation de callbacks nommés
  mise en place d'une "*factory method*" dans ContentReader pour produire  les callbacks
* `v3` : utilisation de promesse pour lire les fichiers de manière asynchrone
* `v3.1` : utilisation d'un `then` pour agir comme un `finally`
* `v3.2` : utilisation de factory pour produire les promesses et avoir un code "plus léger" (?)
* `v3.3` : utilisation de Promise.resolve() pour produire les promesses "simples"

faire ```git checkout master``` pour revenir sur la banche principale
