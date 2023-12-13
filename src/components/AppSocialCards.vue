<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppSocialCards",
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
    <div class="socialCards">
        <div class="row">
            <div class="col-3">
                <div class="image-container">
                    <img src="../assets/social-1.jpg" alt="">
                </div>
            </div>
            <div class="col-6 accrocchio">
                <div class="bg-pink d-flex flex-column align-items-center justify-content-center h-100">
                    <h6>MADE FOR SHARING</h6>
                    <h2>Let's stay in touch</h2>
                    <button class="btn">Follow Us</button>
                </div>
            </div>
            <div class="col-3">
                <div class="image-container">
                    <img class="ps-4" src="../assets/social-2.jpg" alt="">
                </div>
            </div>

            <div class="col-3">
                <div class="image-container">
                    <img src="../assets/social-3.jpg" alt="">
                </div>
            </div>
            <div class="col-3">
                <div class="image-container">
                    <img class="ps-4" src="../assets/social-4.jpg" alt="">
                </div>
            </div>
            <div class="col-3">
                <div class="image-container">
                    <img class="ps-4" src="../assets/social-5.jpg" alt="">
                </div>
            </div>
            <div class="col-3">
                <div class="image-container">
                    <img class="ps-4" src="../assets/social-6.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.accrocchio {
    padding-right: 30px;
    padding-top: 48px;
    padding-left: 60px;

}

.bg-pink {
    background-color: #F1EEF4;
}

h6 {
    font-size: 12px;
    margin-bottom: 2rem;
    font-family: "Work Sans";
}

h2 {
    color: $fontColorViolet;
    font-size: 36px;
    font-family: "Source Sans 4";
    font-weight: 700;
    margin-bottom: 2rem;
}

.btn {
    background-color: $fontColorViolet;
    color: white;
    font-size: 13px;
    width: 10em;
    height: 3em;
}

.socialCards {
    padding: 0 10em;
}

// ...qui eventuale SCSS di AppComponent
img {
    padding-top: 3rem;
    object-fit: cover;
    object-position: left;
    width: 300px;
    height: 400px;
}

.image-container {
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 400px;
}

.image-container img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
}

.image-container:hover img {
    transform: scale(1.1);
    /* Aumenta la scala per l'ingrandimento desiderato */
}
</style>