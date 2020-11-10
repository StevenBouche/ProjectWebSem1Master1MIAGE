<h1 align="center"> Projet Web : Application Discord-like - Angular / .NET</h1>
<h3 align="center"> Code pour lancer l'application : <strong> cd AngularUI > cd forum-app > npm install > ng serve</strong> </h3>

<p align="center"><i>Membres : Armand PREVOT - Steven BOUCHE</i></p>

Nous stockons nos données dans une base Mongo.
Notre application est structurée en micro-service.
Chaque microservice est contenu dans un conteneur Docker.
Aussi, chaque microservice contient une base Mongo qui lui est propre.
Enfin, nous utilisons des WebSocket pour pouvoir gérer les notifications de utilisateurs en temps réel. Le reste des interactions réseau est en HTTP.

Dans le cadre d'un projet universitaire, nous avons réalisé une application qui ressemble à Discord, en tous cas c'était notre objectif.

Voilà ce qu'il est possible de faire avec notre application :
  - Créer un compte
  - Créer des forums
  - Créer des channels de discussion
  - Supprimer des channels de discussion 
  - Créer / envoyer / recevoir des messages dans un channel
  - Visualiser les utilisateurs dans un forum
  - Se connecter / Se déconnecter
  - Rejoindre un forum existant et ses channels
 
 Voilà ce que l'on aurait aimé pouvoir faire/améliorer :
  - Implémenter la suppression de message / forum
  - Améliorer la vérification des formulaires
  - Implémenter la recherche dans les forums / channels / messages
  - Inclure le chat vocal
  - Inclure un système d'amis
  - Inclure des chats privés entre amis
