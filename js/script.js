"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {        
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        };
    },
    rememberMyFilms: function() {
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
    },
    detectLevel: function() {
        let moviesCount = personalMovieDB.count;
        if (moviesCount < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (moviesCount >= 10 && moviesCount < 30) {
            alert('Вы классический зритель');
        } else if (moviesCount >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            return
        }    
    },  
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },  
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre === '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            };
        };
        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    
}


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();

