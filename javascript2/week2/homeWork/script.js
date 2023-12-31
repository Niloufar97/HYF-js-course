const shortMovieTitles = movies.map((movie) => {
  const title = movie.title;
  const shortTitle = title.split(" ");
  if (!shortTitle[1]) {
    shortTitle[1] = "";
  }
  return shortTitle[0] + shortTitle[1];
});
// console.log(shortMovieTitles);

const longMoviesTitle = movies.map((movie) => movie.title);
// console.log(longMoviesTitle);

let countMovies = 0;
movies.map((movie) => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    countMovies++;
  }
});
// console.log(countMovies);

function createTag(number) {
  let tag;
  if (number < 4) {
    tag = "bad";
  } else if (number < 7) {
    tag = "average";
  } else tag = "good";
  return tag;
}
const arrayWithTag = movies.map((movie) => {
  return { ...movie, tag: createTag(movie.rating) };
});
// console.log(arrayWithTag)

const keyWords = ["Surfer", "Alien", "Benjamin"];
const filteredMoviesByTitle = movies.filter((movie) => {
  const lowerCasemovie = movie.title.toLowerCase();
  return keyWords.some((keyword) =>
    lowerCasemovie.includes(keyword.toLowerCase())
  );
});
// console.log(filteredMoviesByTitle.length)

// title dublicated
const hasDoublicatedWords = (title) => {
  const spiltedWords = title.split(" ");
  return spiltedWords.some(
    (word, index) => spiltedWords.indexOf(word) !== index
  );
};
doublicatedWordsInTitle = movies.filter((movie) =>
  hasDoublicatedWords(movie.title)
);
// console.log(doublicatedWordsInTitle)

function avarageRating() {
  const moviesLength = movies.length;
  const ratingSumation = movies.reduce((total, movie) => {
    return total + movie.rating;
  }, 0);
  const average = ratingSumation / moviesLength;
  console.log(average);
}
// avarageRating()
const groupMoviesWithTag = () => {
     const result = arrayWithTag.reduce((groupedMovies , movieWhithTag) => {
        const tag = movieWhithTag.tag;
        if(tag === 'good') {
            groupedMovies.good++
        }
        if(tag === 'average') {
            groupedMovies.average++
        }
        if(tag === 'bad') {
            groupedMovies.bad++
        }
        return groupedMovies
     },{good : 0 , average : 0 , bad: 0})
     console.log(result)
}
groupMoviesWithTag()