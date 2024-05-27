const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,  
}

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
    console.log(personalMovieDB);
}


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
