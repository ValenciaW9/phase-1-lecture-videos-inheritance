class Cat {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.favfood = [];
    }
  
    introduce() {
      return `Hi my name is ${this.name}`;
    }
  
    addFood = (food) => {
      this.favfood.push(food);
    };
  
    loopThroughFoods() {
      console.log(this);
      this.favfood.forEach(this.logFood);
    }
  
    logFood = (food) => {
      console.log(this);
      console.log(`Hi my name is ${this.name} and I love to eat ${food}`);
    };
  }
  
  let rose = new Cat('rose', 'domestic longhair', 9);
  let luke = new Cat('luke', 'domestic short hair', 3);
  rose.addFood('fish');
  rose.addFood('chicken');
  rose.addFood('house plants');
  rose.addFood('brownies');