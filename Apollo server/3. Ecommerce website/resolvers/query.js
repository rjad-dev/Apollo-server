const {products, categories} = require('../db')

exports.Query = {
    categories: (parent, args, { db }) => {
        return db.categories
    },

    category:(parent, args, { db }) => {
        const id = args.id
        return db.categories.find((category) => category.id === id)
    },

    products: (parent, { filter }, { db }) => {
        let filteredProducts  = db.products;
        if (filter){
            const {onSale} = filter
            if(onSale){
                filteredProducts  = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
        }
        return filteredProducts
    },

    product:(parent, args, { db }) => {
        const id = args.id
        const product = db.products.find((product) => product.id === id)
        return product
    }
}