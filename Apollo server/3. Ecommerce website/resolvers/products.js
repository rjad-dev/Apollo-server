exports.Product={
    category: (parent, args, { db }) => {
        const {productID} = parent.id
        return db.categories.find((category) => category.productId === productID)
    },

    reviews: (parent, args, { db }) => {
        const id = parent.id
        return db.reviews.filter((review) => review.productId === id);
    }
}