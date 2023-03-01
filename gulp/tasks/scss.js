import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import {stream} from "browser-sync";
import cleanCss from "gulp-clean-css"; /// Зіжаті файли css
import webpcss from "gulp-webpcss"; /// вибір WEBP зображень
import autoprefixer from "gulp-autoprefixer"; /// Добавлення вендорних прейфіксів
import groupCssMediaQueries from "gulp-group-css-media-queries"; ///Групування медіа запросів

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Erorr: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.browsersync.stream())
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(app.plugins.if(
        app.isBuild, groupCssMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webpppp",
            noWebpClass: ".no-webpppp",
          })
        )
      )
      
      //Розкоментувати якщо потрібен не ззжатий файл стилів
      .pipe(
        app.plugins.if(
          app.isBuild,
          cleanCss())
        )
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
};
