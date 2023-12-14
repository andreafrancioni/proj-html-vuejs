<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",

    props: {
        backgroundColor: String,
    },
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
    <nav :style="{ backgroundColor: backgroundColor }">
        <div class="row bg-pink">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <p>Free international shipping - 10% OFF SITE</p>
            </div>
        </div>
        <div class="row">
            <!-- LOGO -->
            <div class="col-3 d-flex align-items-center">
                <img src="../assets/avada-bakery-logo.png" alt="">
            </div>
            <!-- NAV MENU -->
            <div class="col-6 d-flex align-items-center">
                <ul class="menuLinks d-flex align-items-center justify-content-between">
                    <!-- Per ogni link all'interno dell'array di oggetto nello store genera un list item href -->
                    <li v-for="link in this.store.menuLinks">
                        <a :href="link.link">{{ link.titolo }}</a>
                    </li>
                </ul>
            </div>
            <!-- ACCOUNT E CARRELLO -->
            <div class="col-3 d-flex align-items-center justify-content-end">
                <ul class="menuShop d-flex align-items-center justify-content-between">
                    <li>ACCOUNT</li>
                    <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.bg-pink {
    background-color: #F9F1F2;
}

img {
    width: 150px;
}

p {
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 400;
    color: $fontColorViolet;
    margin: 10px;
}

nav {
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;

    transition: background-color 0.3s ease;
    /* Aggiungi un'animazione al cambio di colore */

    .row {
        padding: 0 3em;
    }
}

ul {

    margin: 0;
    padding: 0;

    li {
        list-style: none;
        margin: 0 2em;
        color: $fontColorViolet;
        font-size: 12px;
        font-weight: 400;

        a {
            text-decoration: none;
            color: $fontColorViolet;
        }

        a:hover {
            border-bottom: 1px solid $fontColorViolet;
        }
    }
}
</style>