<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppProducts",
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="col-4">
            <div class="product-text">

                <h6>OUR PRODUCTS</h6>
                <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural,
                    all organic ingredients.</h2>
            </div>
            <div class="product-button">
                <button class="btn">Explore our products</button>
            </div>
        </div>
        <div class="col-8">
            <div class="product-carousel">

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.wrapper {
    padding: 10em;
    height: 100vh;
}

.product-text {
    color: $fontColorViolet;

    h6 {
        font-size: 12px;
    }

    h2 {
        font-size: 35px;
        font-weight: 700;
    }
}

.product-button {
    .btn {
        color: white;
        background-color: $fontColorViolet;
        font-size: 14px;
        font-weight: 300;
    }
}
</style>