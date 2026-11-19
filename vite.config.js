import { defineConfig } from "vite";
import { resolve } from "node:path";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),

        handlebars({
            partialDirectory: resolve(process.cwd(), "src/partials"),

            context: {
                siteName: "Навчальний сайт",
                labName: "Лабораторна №7"
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