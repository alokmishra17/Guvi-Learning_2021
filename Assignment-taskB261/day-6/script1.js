
/*
Class - Movie
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/


class Movie
{
    constructor(title,studio,rating= "PG")
    {
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movie)
    {
        let arr =[];
        for(var i=0;i<movie.length;i++)
        {
            if(movie[i].rating=="PG")
            arr.push(movie[i].title);
        }
        return(arr);

    }
}

movieInstance1 = new Movie("The Lego Movie","Warner Animation Group","G");
movieInstance2 = new Movie("The Social Network","Columbia Pictures films","R");
movieInstance3 = new Movie("Indochine","Sony Pictures Classics","PG");
movieInstance4 = new Movie("Storks","Warner Animation Group","PG-R");
movieInstance5 = new Movie("Germinal","Sony Pictures Classics");

//given instance
movieInstance6 = new Movie("Casino Royale","Eon Productions","PG­13" );

//Return Movie with rating "PG":
let movie =[movieInstance1,movieInstance2,movieInstance3,movieInstance4,movieInstance5,movieInstance6];
moviePG = movieInstance1.getPG(movie);

console.log(moviePG);