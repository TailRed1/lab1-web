import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(process.cwd(), "src/partials"),

            context: {
                siteName: "Навчальний сайт",
                labName: "Лабораторна №6"
            }
        })
    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), "index.html"),
                about: resolve(process.cwd(), "about.html"),
                contacts: resolve(process.cwd(), "contacts.html")
            }
        }
    }
});