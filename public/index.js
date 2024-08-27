

// gestion du menu burger
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


//gestion du catalogue
//todo On veux avoir les 3 articles du catalogue coffee-display de visible
//todo Puis quand clic sur bouton, affiche le reste, coffee-hidden
//bouton
const seeAllButton = document.getElementById('seeAll');

//article cachés
const hiddenArticle = document.querySelectorAll('.coffee-hidden');

//ajout écouteur évenement sur bouton
//ici le if permet d'éviter que le js se charge si la page n'en a pas besoin
if (seeAllButton) {
seeAllButton.addEventListener('click',function(){

  for (let index = 0; index < hiddenArticle.length; index++) {
   
    hiddenArticle[index].classList.toggle('coffee-hidden');
    seeAllButton.innerHTML = ('Voir moins');
  }
});
}

//Gestion du filtre dans view catalogue
//On veux qu'à la selection d'une catégorie, j'affiche les catégories correspondantes
//On récupère le select
const filterCategorie = document.getElementById('categorie-select');
//ici le if permet d'éviter que le js se charge si la page n'en a pas besoin
if (filterCategorie) {
filterCategorie.addEventListener('change', function() {
  document.getElementById('categorie-form').submit();
});
}



