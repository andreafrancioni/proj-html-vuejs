import { reactive } from 'vue'

export const store = reactive({
    menuLinks: [
        {
            titolo: "HOME",
            link: "#HOME"
        },
        {
            titolo: "SHOP",
            link: "#SHOP"
        },
        {
            titolo: "ABOUT",
            link: "#ABOUT"
        },
        {
            titolo: "GALLERY",
            link: "#GALLERY"
        },
        {
            titolo: "LOCATIONS",
            link: "#LOCATIONS"
        },
        {
            titolo: "JOURNAL",
            link: "#JOURNAL"
        },
        {
            titolo: "CONTACT",
            link: "#CONTACT"
        }
    ]
});
