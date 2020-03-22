# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- New style (commit `28` & `33`)
- Add & delete item (`17 (done) & 36`)

## Article personnel

### Sujet : Pug

Durant ce projet, j'ai découvert **Pug** (anciennement *Jade* ou *Carlin* pour quelques irréductibles Gaulois) qui est un moteur de templates implémenté en JS.
Il permet donc de générer du code en HTML dans une syntaxe similaire à celle d'[Haml](http://haml.info/) où il n'y a **pas besoin de fermer les balises** mais uniquement de les indenter correctement. Il est aussi souvent utilisé de paire avec Node.JS.

Avec l'absence de balises fermantes, cela permet d'écrire un code plus léger et même plus clair si on respecte bien l'indentation. De plus, il est également possible d'injecter directement du JavaScript dans Pug.

Voici un exemple d'un bout de code en Pug suivi de ce même code en HTML basique :

```
doctype html  
html  
    head  
      title My Page  
    body  
      h1 Heading  
      p My paragraph here. 
```

```
<html>  
   <head>  
      <title>My Page</title>  
   </head>  
   <body>  
      <h1>Heading</h1>  
      <p>My paragraph here.</p>  
   </body>  
</html> 
```

Comme dit précédemment, Pug permet donc un code plus léger et lisible. Cependant, il est important de noter qu'il n'est pas possible d'y inclure du code HTML basique avec balises, il faudra donc le reformater au même format que Pug.





