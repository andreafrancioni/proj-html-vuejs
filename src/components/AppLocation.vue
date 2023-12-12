<script>
// Import Swiper Vue.js components

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppLocation",
    components: {

    },
    setup() {
        return {

        };
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
    <div class="location">
        <div class="row">
            <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                <h6>LOCATIONS</h6>
                <h2>Visit our Bakeries</h2>
            </div>
            <div class="col-6 bg-newyork">
                <div class="image">
                    <img src="../assets/new-york-bk.jpg" alt="">
                </div>
                <div class="city">
                    <div class="col-12">
                        <h2 class="d-flex align-items-center justify-content-center">New York</h2>
                    </div>
                    <div class="info d-flex align-items-center pb-5">
                        <div class="col-4 text-center">
                            <h6>CALL US</h6>
                            <h6>1.800.458.556</h6>
                        </div>
                        <div class="col-4 text-center">
                            <h6>OPEN ALL WEEK</h6>
                            <h6>9:00 AM - 6:00 PM</h6>
                        </div>
                        <div class="col-4 text-center">
                            <button class="btn">View Map</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 bg-london">
                <div class="image">
                    <img src="../assets/london-bk.jpg" alt="">
                </div>
                <div class="city">
                    <div class="col-12">
                        <h2 class="d-flex align-items-center justify-content-center">London</h2>
                    </div>
                    <div class="info d-flex align-items-center pb-5">
                        <div class="col-4 text-center">
                            <h6>CALL US</h6>
                            <h6>1.800.458.556</h6>
                        </div>
                        <div class="col-4 text-center">
                            <h6>OPEN ALL WEEK</h6>
                            <h6>9:00 AM - 6:00 PM</h6>
                        </div>
                        <div class="col-4 text-center">
                            <button class="btn">View Map</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;



.location {
    padding: 5em 10em;
}

.col-12 {
    height: 100px;
}

.bg-newyork {
    background-color: #EFEDF4;
}

.bg-london {
    background-color: #F9F1F2;
}

h2 {
    height: 100%;
    color: $fontColorViolet;
    font-size: 36px;
    font-weight: 700;
    font-family: "Source Serif 4";
}

h6 {
    color: $fontColorViolet;
    font-size: 12px;
    font-weight: 400;
    font-family: "Work Sans";
}

.image {
    object-fit: cover;

    img {
        width: 100%;
    }
}

.btn {
    background-color: white;
    color: $fontColorViolet;
    font-family: "Work Sans";
    font-weight: 300;
    font-size: 15px;
}
</style>