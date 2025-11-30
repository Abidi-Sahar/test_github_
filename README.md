il s'agit d'une galerie photo avec API Unsplash: galerie responsive et animée

*** technologies utilisées: HTML/ CSS/ JavaScript

*** Fonctionnalités principales
--- Fonctionnalités de base
recherche d'image: soit en tappant les mots clés soit on cliquant sur l'un ds boutons de recherche
Affichage des images: 
Grille responsive qui s'adapte à l'écran
Images en format "small" pour la galerie
Effet de zoom au survol
Visionnement plein écran
Interactions clavier: Entrée dans la recherche pour lancer/ Échap pour fermer la modal
--- Fonctionnement technique
Utilisation de l'API Unsplash avec clé d'authentification
Requêtes asynchrones avec async/await
Gestion dynamique du DOM
Structure modulaire et maintenable

*** lien vers la page GitHub Pages:  https://abidi-sahar.github.io/test_github_/

*** nouveauté explorées:
se familiariser avec et appofondire les connaissances avec les nouvelles connaissances du cours:
+ Manipulation dynamique : J'ai appris à créer des éléments HTML via JavaScript avec document.createElement()
+ Gestion d'événements : Découverte des event listeners pour les clics et touches clavier
+ API:
Première utilisation d'une API REST avec clé d'authentification
Découverte du format JSON et comment extraire les données (data.results)
Gestion des URLs d'images avec différentes résolutions (small vs regular)
+ gestion par clavier

*** difficultés rencontrées:
+ Problèmes de coordination HTML/JS:
Sélection des éléments : Difficulté à comprendre quand utiliser getElementById vs querySelector
+Défis avec l'API:
Structure de réponse complexe : Difficulté à naviguer dans l'objet JSON retourné par l'API
Gestion des erreurs : Problèmes quand l'API ne retournait aucun résultat

*** solutions apportées:
+ Gestion robuste des APIs:
Toujours prévoir les cas d'erreur et les réponses vides
Comprendre la structure des données avant de coder
+ Recherche de tutoriels sur les modals et CSS Grid
+ Approche progressive : Construction pas à pas en testant chaque fonctionnalité
