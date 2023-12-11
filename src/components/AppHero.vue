<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHero",
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
    <div class="hero">
        <div class="text-wrapper col-4">
            <div class="hero-text">

                <h6>FRESH & TASTY BAKERY EVERY DAY</h6>
                <h2>The Perfect Fresh Bread</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita a facilis vel! Corporis quia minus,
                    asperiores eligendi sunt ut illum tenetur nobis placeat error qui? Expedita neque ex officiis culpa.
                </p>
            </div>
            <div class="hero-button">
                <button class="btn">Explore our products</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.hero {
    margin-top: -96px;
    padding: 10em;
    background-image: url("../assets/hero-header-bakery.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.hero-text {
    color: $fontColorViolet;

    h6 {
        font-size: 12px;
    }

    h2 {
        font-size: 56px;
    }
}

.hero-button {
    .btn {
        color: $fontColorViolet;
        background-color: white;
        font-size: 14px;
        font-weight: 300;
    }
}
</style>