const database = require('./database');

const dataMapper = {
    async getSomeCoffee(limitThree) {
        const result = await database.query({
            text: 'SELECT * FROM coffee ORDER BY id DESC LIMIT $1',
            values: [limitThree],
        })
        return result.rows;
    },

    async getOneCoffee(id) {
        const result = await database.query({
            text: 'SELECT * FROM coffee WHERE id = $1',
            values: [id],
        })
        return result.rows[0];
    },

    async getAllCoffee() {
        const result = await database.query({
            text: 'SELECT * FROM coffee',

        })
        return result.rows;
    },
    
    async getCoffeeByCategorie(categorie) {
        const result = await database.query({
            text: 'SELECT * FROM coffee WHERE main_characteristic = $1',
            values: [categorie],
        })
        return result.rows;
    },
    
    async getAllCategories() {
        const result = await database.query({
            text:'SELECT DISTINCT main_characteristic FROM coffee',
        
        });
        return result.rows;
    }

    

}



module.exports = dataMapper;
