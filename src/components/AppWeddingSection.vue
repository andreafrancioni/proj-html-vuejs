<script>
// Import Swiper Vue.js components

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppWeddingSection",
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
    <div class="services">
        <div class="row">
            <div class="services-text col-12 text-center">
                <h6>CORPORATE & WEDDINGS</h6>
                <h2>Baking Special Moments</h2>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-between">
            <div class="col-6">
                <div class="cardWrapper">
                    <div class="cardContent">
                        <div class="cardPoster">
                            <img src="../assets/corporate-bg.jpg" alt="">
                        </div>
                        <div class="cardInfo corporate">
                            <div class="cardDesc">
                                <p>International Bakery</p>
                                <h3>Corporate Events</h3>
                                <button class="btn">Explore more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="cardWrapper">
                    <div class="cardContent">
                        <div class="cardPoster">
                            <img src="../assets/wedding-bg.jpg" alt="">
                        </div>
                        <div class="cardInfo wedding">
                            <div class="cardDesc">
                                <p>Private Dining Hall</p>
                                <h3>Wedding & Parties</h3>
                                <button class="btn">Explore more</button>
                            </div>
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



.services {
    padding: 0 10em;
}

.services-text {
    color: $fontColorViolet;
    margin-bottom: 3rem;

    h6 {
        font-size: 12px;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 35px;
        font-family: "Source Sans 4";
        font-weight: 700;
    }
}

.cardWrapper {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 1em;
    flex-wrap: wrap;
    background-color: transparent;
    width: 100%;
}

.cardContent {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
}

.cardWrapper:hover .cardInfo {
    display: block;
}

.cardPoster {
    width: 100%;
    height: 100%
}

.cardPoster img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}


.cardInfo.wedding {
    background-image: url(../assets/wedding-hover-bg.jpg);
    background-size: cover;
}

.cardInfo.corporate {
    background-image: url(../assets/corporate-hover-bg.jpg);
    background-size: cover;
}

.cardInfo {
    display: none;
    position: absolute;
    top: 0;

    height: 100%;
    width: 100%;


    .cardDesc {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .btn {
            color: white;
            background-color: $fontColorViolet;
        }

    }
}
</style>