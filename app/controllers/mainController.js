
//On récupère le dataMapper pour la future BD
const dataMapper = require('../dataMapper');


const mainController = {
    // méthode pour la page d'accueil
    async homePage(req,res) {

        try {
            const limitThree = 3;
            //On récupère les cafés de la base de données
            const coffees =await dataMapper.getSomeCoffee(limitThree);
            //Passage des données à la vue
            res.render("accueil", {coffees});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);
        }
    },

        //méthode pour le détails d'un article
    async detailsPage (req, res) {

        try {
                //On récupère l'id de l'article présent dans paramètres de l'url
            const id = Number(req.params.id);
    
            const coffee = await dataMapper.getOneCoffee(id);
            res.render("details", {coffee});
                
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);
        }
    },
        //méthode pour la page catalogue
    async listPage (req, res) {

        // const seeAll = req.query.seeAll;
        //on veux afficher 3 articles, puis si clique sur bouton voir tout, afficher tous les articles
        try {
            // J'envois tous les cafés et gérerais le filtre dans catalogue.ejs
            const coffees = await dataMapper.getAllCoffee();  
            //Je récupère les catégories pour mon form select
            const categories = await dataMapper.getAllCategories();  

        
            res.render('catalogue',{coffees, categories});      
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);
        }     
    },

    async searchCategorie (req, res) {
        try {
            const categorie = req.query.categorie;
            const coffees = await dataMapper.getCoffeeByCategorie(categorie);
            //Je récupère les catégories pour mon form select
            const categories = await dataMapper.getAllCategories();
            
            res.render('catalogue', {coffees, categories});
            
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);
        }
    },
    //Méthode pour page Boutique
    async boutiquePage(req,res) {

        try {
            const limitThree = 3;
            //On récupère les cafés de la base de données
            const coffees =await dataMapper.getSomeCoffee(limitThree);
            //Passage des données à la vue
            res.render("boutique", {coffees});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);
        }
    },

    

};

// Exportez le contrôleur
module.exports = mainController;