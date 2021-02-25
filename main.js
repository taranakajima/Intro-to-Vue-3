const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            if (this.cart.length > 0) {
                const removeIndex = this.cart.indexOf(id)
                this.cart.splice(removeIndex, 1)
            }
        }
    },
    computed: {
        cartLength() {
            return this.cart.length
        }
    }
})
