import * as nodePath from 'path';
const reootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,///  синтаксис /**/* - це всі файли цього типу
        scss: `${srcFolder}/scss/**/*.scss`,///  синтаксис /**/* - це всі файли цього типу
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpj,jpeg,png,svg,gif,ico,gif,webp}`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: reootFolder,
    ftp: `test`
}