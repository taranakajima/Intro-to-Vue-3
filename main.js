const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 'size-XS', size: 'XS' },
                { id: 'size-S', size: 'S' },
                { id: 'size-M', size: 'M'},
                { id: 'size-L', size: 'L'},
                { id: 'size-XL', size: 'XL' }
            ]
        }
    }
})
