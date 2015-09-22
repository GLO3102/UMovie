# Projet de session - UMovie

Le projet de session consiste à développer une application permettant de visionner une bibliothèque de films/saisons télévisées, de pouvoir créer des _watchlists_ et de les partager entre amis.

Le projet doit être fait en équipe de 4 à 6 étudiants. L’équipe doit utiliser les dépôts GitHub fournis par les enseignants. L'application doit être réalisée en *anglais*.
l
**Dates de remises:**

<table>
  <tr>
    <td>Livrable 1</td>
    <td>27 septembre 23h55</td>
  </tr>
  <tr>
    <td>Livrable 2</td>
    <td>8 novembre 23h55</td>
  </tr>
  <tr>
    <td>Livrable 3</td>
    <td>13 décembre 23h55</td>
  </tr>
</table>

**NOTE** : Pour les previews vidéo, vous devrez utiliser l'API de Youtube puisque le format renvoyé par iTunes n'est pas lisible. Voir [ici](https://developers.google.com/youtube/v3/code_samples/javascript#search_by_keyword). Utilisez simplement le premier résultat de recherche.

**Pour chaque livrable**

Fournir un ZIP comprenant: 

* Document design au format PDF

    * Expliquer comment lancer l’application

        * Doit être **très** simple (1 ou 2 étapes maximum)

    * Votre numéro d’équipe

    * Le membres de votre équipe

        * Noms, IDULs et Matricules

* Dossier qui comprend les fichiers html, css et js 

* **ATTENTION** Votre application 

    * doit fonctionner sans aucune manipulation du correcteur

    * doit fonctionner **sans erreurs ni exceptions** dans la console de Chrome (la correction sera fait dans Chrome, pas Firefox, pas Internet Explorer). Si l’application n’est pas fonctionnelle et que le correcteur n’est pas en mesure de corriger, vous **risquez la note de zéro.**

[Grille de correction disponible ici](https://drive.google.com/open?id=1QyXVmabxvEgLDRd8obBuycHwSnjOGZmyF4V5BCi4rV4)

## Livrable 1

* Afficher un menu comprenant les items suivants:

    * Champ de recherche

    * Lien vers la page d'accueil

    * Lien vers les _watchlists_

    * Afficher l’utilisateur courant

    * Lien pour se déconnecter

    * Lien vers les paramètres utilisateurs

    * Inspirez vous des applications de musiques populaires (rdio, spotify, google play music, etc)

    * La barre doit être responsive

        * Supporter 3 formats d’écrans

        * Mobile : Le menu peut être masqué/affichée avec du JavaScript et est masqué par défault

        * Tablette : Le menu est plus petit et laisse plus de place aux pages (telles que movie, actor etc.)

        * Standard : Le menu est visible par default et plus gros

* Afficher la page d’un film (movie.html)

    * La page de film doit comprendre le

        * nom du film

        * lien vers la page itunes avec logo: [https://www.apple.com/ca/itunes/link/](https://www.apple.com/ca/itunes/link/)

        * genre
        
        * date de sortie
        
        * description
        
        * preview vidéo du film (la vidéo n'a pas besoin d'etre fonctionnelle au livrable 1).
        
        * couverture
        
        * "rating" du film (Everyone, Mature etc.)

    * La page doit être statique (les informations du film doivent être *hardcodées*), comprendre seulement du HTML et du CSS

    * La page doit être responsive

        * Supporter 3 formats d’écrans (*mobile*, *tablet* et *desktop*)

            * Les images doivent s’adapter au 3 tailles d’écran
            
* Afficher la page d’une saison de série télévisée (tvshow.html)

    * La page de série télévisée doit comprendre le

        * nom de la série télévisée

        * lien vers la page itunes avec logo: [https://www.apple.com/ca/itunes/link/](https://www.apple.com/ca/itunes/link/)

        * genre
        
        * date de sortie
        
        * description
        
        * preview vidéo de la série (la vidéo n'a pas besoin d'etre fonctionnelle au livrable 1).
        
        * couverture
        
        * liste des épisodes de la série (simplement le titre et la pochette).

    * La page doit être statique (les informations de la série doivent être *hardcodées*), comprendre seulement du HTML et du CSS

    * La page doit être responsive

        * Supporter 3 formats d’écrans (*mobile*, *tablet* et *desktop*)

            * Les images doivent s’adapter au 3 tailles d’écran

* Afficher la page d’un acteur (actor.html)

    * La page d’acteur doit comprendre

        * nom de l'acteur

        * lien pour achat sur itunes avec logo: [https://www.apple.com/ca/itunes/link/](https://www.apple.com/ca/itunes/link/)

        * genre primaire de l'acteur

        * photo de l'acteur

        * liste des films (si applicable) incluant (nom, pochette, date de sortie, preview vidéo)
        
    * La page doit être statique (les informations de l’acteur doivent être *hardcodées*), comprendre seulement du HTML et du CSS ou JavaScript de présentation.

    * La page doit être responsive

        * Supporter 3 formats d’écrans (*mobile*, *tablet* et *desktop*)

            * Les images doivent s’adapter au 3 tailles d’écran

            * Les listes de films et de saisons doivent etre flexibles et s'adapter à la taille de l'écran
            
* Page d'accueil de l'application

    * La page d'accueil doit représenter le point d'entrée de votre application. Elle ne demande pas de fonctionnalité particulière, à vous d'être créatif!
    
    * La page doit etre responsive (Supporter 3 formats d'écrans).

* Document design

    * Expliquer comment lancer l’application

        * Ça ne devrait pas être plus compliqué que de donner le chemin de vos fichiers html...

## Livrable 2

* La barre de menu doit être un *template* ou une *vue*

* Afficher la page des _watchlists_ de l’utilisateur 

    * La page doit être dynamique (les informations des listes doivent *provenir de l’API via une requête AJAX*)

    * Permet de créer une nouvelle liste vide et de lui donner un nom.

    * La page montre les _watchlists_ de l’utilisateur.

    * Permet de modifier une _watchlist_

        * Changer le nom de la _watchlist_

        * Ajouter/Retirer des films d’une _watchlist_

        * Supprimer une _watchlist_

    * Permet de voir les films dans une _watchlist_ (dans la même page **OU** dans une page différente)

    * La page doit intégrer les concepts MVC
    
    * NOTE : Les _watchlists_ ne s'appliquent qu'aux films, et non pas aux séries télévisées.

* Afficher la page d’un acteur

    * La page doit être dynamique (les informations de l'acteur doivent *provenir de l’API via une requête AJAX*)

    * La page doit intégrer les concepts MVC

* Afficher la page d’un film 

    * La page doit être dynamique (les informations du film doivent *provenir de l’API via une requête AJAX*)

    * La page doit contenir un bouton pour ajouter le film à une _watchlist_ existante

    * La page permet d’écouter l'extrait vidéo du film

        * La lecture se fait directement dans le navigateur sans téléchargement

    * La page doit intégrer les concepts MVC
    
* Afficher la page d’une série télévisée 

    * La page doit être dynamique (les informations de la série télévisée doivent *provenir de l’API via une requête AJAX*)

    * La page permet d’écouter l'extrait vidéo de la série

        * La lecture se fait directement dans le navigateur sans téléchargement

* Tous les formulaires doivent être validés via JavaScript **avant** d’être soumis au serveur

* Document design

    * Expliquer comment lancer l’application

    * Donner des détails sur comment voir chacune des pages

        * urls

        * boutons à cliquer

        * facilitez la vie du correcteur !

## Livrable 3

* Afficher la page d’une série télévisée 
        
    * La page permet d'ouvrir une fenêtre modale pour chaque épisode de la série. La fenêtre modale doit comprendre les détails suivants :
        
        * nom de la saison
        
        * nom de l'épisode
        
        * couverture
        
        * preview vidéo de l'épisode
        
        * description
        
        * durée de l'épisode
    
  * La page doit permettre de chercher parmi les épisodes de la série.

* Afficher la page d’enregistrement (*sign up*)

    * L’utilisateur doit pouvoir s’enregistrer en entrant son nom, courriel, et mot de passe

* Afficher la page d’authentification (*login*)

    * L’utilisateur doit pouvoir se connecter avec son courriel et mot de passe

    * L’application doit enregistrer le token d’authentification dans un cookie et envoyer ce token comme en-tête Authorization à chaques requêtes AJAX

        * Un fois le token enregistré, on peut fermer le navigateur et retourner sans avoir à entrer son mot de passe

    * L’application doit rediriger l’utilisateur à la page de login si son token est expiré, ou absent.

    * Afficher un message d’erreur clair en cas de mauvaise combinaison courriel et mot de passe

* Permettre la recherche

    * Recherche globale

    * Recherche par

        * Film

        * Saison de série télévisée

        * Acteur

        * Utilisateur

    * La recherche doit mener à une page de résultat

* Page de résultats (recherche globale)

    * Afficher un icône pour différencier les résultats (film, saison de série télévisée, acteur, utilisateur) **OU** grouper les résulats par type

    * Les résultats doivent avoir des boutons pour ajouter à une watchlist dans le cas d'un film ou, dans le cas d’un utilisateur, un bouton pour suivre celui-ci.

    * Lien vers le résultat plus en détails (page série, page film, page acteur, page utilisateur)
    
    * La page doit permettre de filtrer par genre. Elle doit donc lister les genres et lorsque l'usager clique sur un ou plusieurs genres, afficher seulement les films/séries correspondant à ces genres.

* Afficher la page d’un utilisateur

    * Sois l’utilisateur courant ou un utilisateur d’un résultat de recherche

    * Afficher le nom et le courriel de l’utilisateur

    * Afficher une liste des watchlists de cet utilisateur

    * Offrir un bouton suivre et arrêter de suivre pour ajouter ou supprimer cet utilisateur de votre liste d’amis.

    * Afficher les amis de l’utilisiteur

* Validation et sécurité

    * L’application doit afficher des messages d’erreurs clairs lorsqu’un erreur serveur survient.

    * Tous les formulaires doivent être validés via JavaScript **avant** d’être soumis au serveur

* Fonctionnalités avancées (**choisir 2 parmis les propositions suivantes**)

    * La barre de recherche offre l’autocomplétion des résultats pendant que l’utilisateur tappe au clavier

    * Afficher une photo de l’utilisateur avec gravatar
    
    * Permettre de "reviewer" un film/série et d'afficher les reviews des différents utilisateurs.

    * Obtenir des suggestions d’acteurs similaires à un acteurs ou de films similaires à un film

    * La page de film/série permet de trouver le film/série à meilleur prix sur des sites d’achat en ligne (Amazon, Archambault, iTunes, etc)

    * Une fonctionnalité de votre choix

        * Cette fonctionalité doit être approuvée par les 2 enseignants du cours

* Document design

    * Expliquer comment lancer l’application

    * Donner des détails sur comment voir chacune des pages

        * urls

        * boutons à cliquer

        * facilitez la vie du correcteur !

    * Expliquer vos 2 fonctionnalités avancées et comment les voir en action
