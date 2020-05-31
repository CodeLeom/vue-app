var app = new Vue({
    el: '#app',
    data: {
        brand: 'Leom',
        product: 'Socks',
        image: 'socks.jpg',
        inventory: 34, //this value has effect on the in stock at the product info in the html file
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 225,
                variantColor: 'green',
                variantImage: 'socks.jpg'
            },
            {
                variantId: 226,
                variantColor: 'Red',
                variantImage: 'red.jpg' 
            }
        ],
        cart: 0,
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})