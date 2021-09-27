import babel from 'rollup-plugin-babel'
import less from 'rollup-plugin-less'

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        babel(),
        less({

            output: 'build/main.css',
        }),
    ],
    external: ['react'],
};