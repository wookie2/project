"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,  
}

function rememberMyFilms() {
    let i = 1;
    while (i <= 2) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');        
        if (!a || !b || length.a > 50) {
            i--;
        } else {
            personalMovieDB.movies[a] = b;
            i++
        }
    }
}

//rememberMyFilms();

function detectLevel() {
    let moviesCount = personalMovieDB.count;
    if (moviesCount < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (moviesCount > 10 && moviesCount < 30) {
        alert('Вы классический зритель');
    } else if (moviesCount > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
} 

//detectLevel()

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        return
    }    
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
};

//writeYourGenres();
//showMyDB(personalMovieDB.privat);

