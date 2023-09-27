// This function calculates total price of a new order
// @param {Array} products cartProducts
// @returns {number} Total price

const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

export { totalPrice }