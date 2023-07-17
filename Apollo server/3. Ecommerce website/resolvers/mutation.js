const { v4:uuid } = require('uuid');
const { Category } = require('./categories');

exports.Mutation = {
    addCategory: (parents, {input}, { db }) => {
        const {name} = input
        const newCategory = {
            id: uuid(),
            name
        };

        db.categories.push(newCategory)

        return newCategory
    },

    addProduct: (parents, {input}, { db }) => {
        const {name, description, quantity, price, image, onSale, categoryId} = input
        const newProduct = {
            id: uuid(),
            name, 
            description, 
            quantity, 
            price, 
            image, 
            onSale, 
            categoryId
        }
        db.products.push(newProduct)
        return newProduct
    },

    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input;
    
        const newReview = {
          id: uuid(),
          date,
          title,
          comment,
          rating,
          productId,
        };
    
        db.reviews.push(newReview);
    
        return newReview;
      },

      deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => category.id !== id);
        db.products = db.products.map((product) => {
          if (product.categoryId === id)
            return {
              ...product,
              categoryId: null,
            };
          else return product;
        });
        return true;
      },

      deleteProduct: (parents, {id}, {db}) => {
        db.products = db.products.filter((product) => product.id !== id);
        db.reviews = db.reviews.filter((review) => review.productId !== id);
        
        return true
      },

      deleteReview: (parents, {id}, {db}) => {
        db.reviews = db.reviews.filter((review) => review.id !== id);
        
        return true
      },

      updateCategory: (parents, {id, input}, {db}) => {
        const index = db.categories.findIndex(category => category.id === id)

        db.categories[index]= {
            ...db.categories[index],
            ...input
        };
        return db.categories[index]
      },

      updateProduct: (parents, {id, input}, {db}) => {
        const index = db.products.findIndex(product => product.id === id)

        db.products[index]= {
            ...db.products[index],
            ...input
        };
        return db.products[index]
      },

      updateReview: (parents, {id, input}, { db }) => {
        const index = db.reviews.findIndex(review => review.id === id)

        db.reviews[index] = {
            ...db.reviews[index],
            ...input
        };

        return db.reviews[index]
      }
}