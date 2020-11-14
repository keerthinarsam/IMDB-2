CREATE DATABASE imdb;
CREATE TABLE movie(
    movie_id SERIAL PRIMARY KEY,
    movietitle VARCHAR(20),
    moviecast VARCHAR(50),
    moviegenre VARCHAR(10),
    moviedirector VARCHAR(20),
    movierating INT[5],
    moviereviews VARCHAR(20)


);