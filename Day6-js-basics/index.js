
//Task 1

class Movie{

    constructor(title,studio,rating="10"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
        set rating(n){
            console.log  ("set the rating value"+" "+n)
            this._rating=n;

        }

        get rating(){
           
            return this._rating;

        }

        
    
}

//const film2=new Movie("jailer","sunpictures","PG15")


/*B) The constructor for the class Movie will set the class property rating 
to "PG" as default when no rating is provided.*/

const film1=new Movie("Casino Royale","Eon Productions");
console.log(film1.title);
console.log(film1.studio);
console.log(film1.rating);

/* D) Write a piece of code that creates an instance of the class Movie 
// with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/
const film=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(film.title);
console.log(film.studio);
console.log(film.rating);
/**************************************************************************************************************************/

//QA 2

class Circle{

    constructor(radius,color){

        this.radius=radius;
        this.color=color;
    }

    set setRadius(radius){
         this.radius=radius;
    }
    get getRadius(){

        return this.radius;
    }

    set setColor(color){

        this.color=color;
    }
    get getColor(){
        return this.color;

    }
    get toString(){

        return `"Circle[circle=${this.radius},color=${this.color}]"`;
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
    get circumference(){

        return 2*Math.PI*this.radius;
    }
}
const circle=new Circle("1.0","red");

console.log(circle.getRadius);
console.log(circle.getColor);
console.log(circle.toString);
console.log(circle.area);
console.log(circle.circumference);


/****************************************************************************************************/
//QA 3
class Person{

    constructor(name,age,gender,salary){

        this.names=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;

    }
}


let obj1=new Person("sathish","32","male","55k");
console.log(obj1.names);
console.log(obj1.age);
console.log(obj1.gender);
console.log(obj1.salary);

/******************************************************************************************************/
//QA4

class Uber{
    constructor(km,ruba=50){
        this.km=km;
        this.ruba=ruba;
    }
    get price(){

        return this.ruba=this.km*this.ruba;
    }
}

const uber1=new Uber(5);
const uber2=new Uber(5,125);
console.log(uber1.price);
console.log(uber2.price);