<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppProducts",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
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
    <div class="products d-flex align-items-center">
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
                <swiper :navigation="true" :modules="modules" class="mySwiper" :loop="true">
                    <swiper-slide>
                        <div class="image">
                            <img src="../assets/choco-chip-cookies.jpg" alt="">
                        </div>
                        <div class="image">
                            <img src="../assets/strawberry-jam-cookies.jpg" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image">
                            <img src="../assets/cookies-with-ice-cream.jpg" alt="">
                        </div>
                        <div class="image">
                            <img src="../assets/home-bread.jpg" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.products {
    padding: 10em;
    height: 100vh;
}

.product-text {
    color: $fontColorViolet;

    h6 {
        font-size: 12px;
        font-family: 'Work Sans';
        font-weight: 300;
    }

    h2 {
        font-size: 35px;
        font-weight: 700;
        font-family: 'Source Serif 4';
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

.image {
    padding: 10px;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>