import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
    plugins: [
        Unfonts({
            google: {
                families: [{
                    name: 'Montserrat',
                    styles: 'ital,wght@0,300..700;1,300..700',
                }],
            },
        }),
    ],
})