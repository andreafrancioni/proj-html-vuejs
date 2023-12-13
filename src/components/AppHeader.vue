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
        <div class="row">
            <div class="col-3 d-flex align-items-center">
                <img src="../assets/avada-bakery-logo.png" alt="">
            </div>
            <div class="col-6 d-flex align-items-center">
                <ul class="menuLinks d-flex align-items-center justify-content-between">
                    <li v-for="link in this.store.menuLinks">
                        <a :href="link.link">{{ link.titolo }}</a>
                    </li>
                </ul>

            </div>
            <div class="col-3 d-flex align-items-center justify-content-end">
                <ul class="menuShop d-flex align-items-center justify-content-between">
                    <li>ACCOUNT</li>
                    <li><i class="fas fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

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