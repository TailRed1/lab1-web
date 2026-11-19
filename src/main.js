import "./styles/tw.css";
import "./styles/main.scss";

import {
    initThemeToggle
} from "./js/common/theme.js";


initThemeToggle();


const page = document.body.dataset.page;


const routes = {
    about: async () => {
        const {
            initAbout
        } = await import(
            "./js/app/aboutPage.js"
        );

        await initAbout();
    }
};


if (routes[page]) {
    routes[page]().catch((error) => {
        console.error(
            "Помилка ініціалізації сторінки:",
            error
        );
    });
}