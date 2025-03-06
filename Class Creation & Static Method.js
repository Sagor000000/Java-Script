/*Class Creation & Static Method
Create a class named Car with properties brand and model.
Inside the class, create a static method called compareCars(car1, car2).
The method should compare the models of two cars and return which one has a greater value.
Create two car objects and compare them using the static method.*/

class car {
    constructor(brand , model){
        this.brand = brand 
        this.model = model
    }

    static compareCars(car1, car2){
        if (car1.model > car2.model){
            return `${car1.brand} ${car1.model} in newer then ${car2.brand} ${car2.model}.`;
        }
        else if (car1.model < car2.model){
            return `${car2.brand} ${car2.model} in newer then ${car1.brand} ${car1.model}.`;
        }
        else {
            return `Both cars are from the same years.`;
        }
  }
}

const car1= new car ("BMW" , 2024);
const car2= new car ("Toyota", 2022);

console.log(car.compareCars(car1, car2));
