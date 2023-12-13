<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppShopNow",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <section class="shopnow">
        <div class="row">
            <div class="col-8">
                <div class="product">
                    <h6>TRY OUR SEASONAL PRODUCTS</h6>
                    <h2>Order for pick-up or delivery to your home</h2>
                    <button class="btn">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
h6 {
    font-size: 12px;
    font-family: "Work Sans";
    font-weight: 400;
    color: rgba(255, 255, 255, 0.682);
}

h2 {
    font-size: 48px;
    font-family: "Source Serif 4";
    font-weight: 700;
    color: white;
}

.btn {
    margin-top: 3rem;
    color: $fontColorViolet;
    background-color: white;
    font-size: 18px;
    font-weight: 200;
    width: 8rem;
    height: 3rem;
}

.product {
    padding: 10rem;
}

.shopnow {
    margin-top: 4rem;
    background-image: url(../assets/call-to-action-bg.jpg);
    background-size: cover;
}
</style>