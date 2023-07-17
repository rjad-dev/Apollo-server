exports.Category = {
    products: (parent, { filter }, { db }) => {

        const categoryID = parent.id
        var categoryProducts = db.products.filter((product) => product.categoryId === categoryID)
        var filteredCategoryProducts = categoryProducts;
        if (filter){
            if(filter.onSale === true){
                filteredCategoryProducts  = filteredCategoryProducts.filter(product => {
                    return product.onSale
                })
            }
        }
        return filteredCategoryProducts
    }
}