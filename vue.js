var webstore = new Vue ({
    el:"#app",
    data: {
        showProduct: true,
        products: products,
        errors: [],
        order: {
            firstName: null,
            phoneNumber: null,
        },
        sitename: "Classes & Activities",
        cart: []
    },
    methods: {
               decrement(product){
            if(product.availableInventory > 0){
                product.availableInventory-- ;
            }
        },
        addToCart(product) {
            this.cart.push(product.id && product.title);
    
        },
            showCheckout() {
                this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Order submitted!')
    },

        canAddToCart (product) {
            return product.availableInventory > this.cartCount(product.id)
        },
        cartCount(id) {
            let count = 0;
            for(let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) count;
                }
                return count;
            },
            checkForm:function(e) {
                if(this.order.firstName && this.order.phoneNumber) return;
            this.errors = [];

            if (!this.order.firstName) {
                this.errors.push('Please enter your first name.');
            }
            if (!this.order.phoneNumber) {
                this.errors.push('Please enter your phone number name');
           
            }
        
           
           

            e.preventDefault();
        },         

        }
    
    });