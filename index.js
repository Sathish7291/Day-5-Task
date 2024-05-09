1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

	class Movie{
  constructor(title,studio,rating = "PG"){
    		this.title = title;
        this.studio = studio
    		this.rating = rating
  		}
  static getPG(movies){
  	  return movies.filter(movie => movie.rating === "PG")
  }
}
let casinoRoyale = new Movie("Casino Royale","Eon Productions","PG-13")
console.log("Title:",casinoRoyale.title)
console.log("Studio:",casinoRoyale.studio)
console.log("Rating:",casinoRoyale.rating)

let moviesArray = [
  new Movie("Movie1","Studio1","PG"),
  new Movie("Movie2","Studio2","PG-13"),
  new Movie("Movie3","Studio3","R")
]

let pgMovies = Movie.getPG(moviesArray)
console.log("PG Rated Movies:")
pgMovies.forEach(movie => {
  console.log("Title:",movie.title,"Studio:",movie.studio,"Rating:",movie.rating)
})

2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

	class Circle{
 		 constructor(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
      		if (typeof (radius) !== "undefined") {
            this.radius = radius;
      		}
      if (typeof (color) !== "undefined") {
          this.color = color;
       		}
 	 }
  getRadius(){
      return this.radius;
  };
  setRadius(radius) {
      this.radius = radius;
  };
  getColor() {
      return this.color;
  };
  setColor(color) {
      this.color = color;
  };
 toString() {
      return `Radius: ${this.radius} Color: ${this.color}`
  };
  getArea() {
      return (2 * (Math.PI) * this.radius);
  };
  getCircumference() {
      return (2 * this.radius);
  };
};
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());


3. Write a “person” class to hold all the details.
	    class Person{
    		  constructor(name,mobile,age,email,education,city,height,weight){
      			  this.name = name
      			  this.mobile = mobile
      			  this.age = age
       			  this.email = email
      			  this.education = education
     			    this.city = city
        			this.height = height
      			  this.weight = weight
 			   }	
display(){
    console.log(this.name,this.mobile,this.age,this.email,this.education,this.city,this.height,this.weight)
    }
}
let person1= new Person("arun","12345","25","arun@gmail.com","Bsc","salem","5feet","72 kg")
person1.display()



4.write a class to calculate the Uber price.

class UberPriceCalculator {

  			static Base_fare = 100;
  
        static Per_Km_Rate = 28;
  
        static Per_Minute_Rate = 1;
  
        constructor(distance, duration) {
  
                this.distance = distance;
  
                this.duration = duration;
  
  		    }
  
  calculateFare() {
  
          let distanceFare = this.distance * UberPriceCalculator.Per_Km_Rate;
  
          let timeFare = this.duration * UberPriceCalculator.Per_Minute_Rate;
  
          let totalFare = UberPriceCalculator.Base_fare + distanceFare + timeFare;
  
          return totalFare;
  
  }
  
  getDistance() {
  
        return this.distance;
  
  }
  
  
  getDuration() {
  
  return this.duration;
  
  }
  
  
  Display() {
  
  return `UberPriceCalculator[distance=${this.distance.toFixed(2)} KM, duration=${this.duration} minutes]`;
  
  }
  
  }
  
  const calculator = new UberPriceCalculator(5, 15);
  
  console.log(calculator.Display());
  
  let fare = calculator.calculateFare();
  
  console.log(`Total Fare: Rs${fare.toFixed(2)}`);
