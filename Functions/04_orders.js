function order(product, quantity) {

    const products = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,

    }

    let result = products[product] * quantity;
    console.log(result.toFixed(2));
    


}
let result = order('coffee', 2);


