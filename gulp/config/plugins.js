import replace from "gulp-replace"; // Пошук і заміна
import plumber from "gulp-plumber"; // Опрацювання помилок
import notify from "gulp-notify"; // Повідомлення підсказки
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Проверка обновления

export const plugins = {
    replace: replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer,
    if: ifPlugin
}