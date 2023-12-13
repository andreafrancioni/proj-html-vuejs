<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppFooter",
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
    <section class="footer">
        <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center">
                <div class="col-12">
                    <img src="../assets/avada-bakery-logo-retina.png" alt="">
                </div>
                <div class="col-12">
                    <ul class="d-flex align-items-center justify-content-between flex-wrap">
                        <li>Shop</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Locations</li>
                        <li>Journal</li>
                        <li>Contact</li>
                        <li>Orders</li>
                    </ul>
                </div>
            </div>
            <div class="col-6 d-flex align-items-center flex-column justify-content-center">
                <div class="col-12">
                    <h3 class="text-center">Subscribe to our Newsletter</h3>
                </div>
                <div class="col-12 d-flex align-items-center">
                    <div class="col-8 d-flex align-items-center justify-content-end pe-2">
                        <input type="text" placeholder="Enter email address*">
                    </div>
                    <div class="col-4">
                        <button class="btn">Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="col-8 d-flex flex-column justify-content-center">
                <p>© Copyright 2023 | Bakery | All Rights Reserved | Made by Andrea Francioni</p>
            </div>
            <div class="col-4 d-flex flex-column justify-content-center">

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent

h3 {
    font-family: "Source Serif 4";
    font-size: 25px;
    font-weight: 700;
    color: $fontColorViolet;
}

p {
    font-family: "Work Sans";
    font-size: 15px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.608);
    margin-left: 30px;
}

input {
    width: 20rem;
    height: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.136);
    border-radius: 5px;
    padding: 1rem;
}

.row {
    padding: 3rem;
    height: 400px;
}


ul {
    list-style: none;
    padding: 0;

    li {
        margin: 0 35px;
        color: $fontColorViolet;
        font-size: 16px;
        font-family: "Work Sans";
        font-weight: 300;
    }
}

img {
    width: 160px;
    margin-left: 30px;
    margin-bottom: 20px;
}

.btn {
    color: white;
    background-color: $fontColorViolet;
    font-weight: 200;
    width: 10rem;
    height: 3rem;
}
</style>