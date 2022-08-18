// Task 1: Code a Person class
class Person{
    constructor(name, age, energy){
        this.name = name
        this.age = age
        this.energy = energy
        
    }

     sleep() {
         this.energy = this.energy + 10
     }
    
    doSomeThingFun() {
        this.energy = this.energy - 10
        
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    
    constructor(xp, hourlyWage, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }

    goToWork() {
        this.xp = this.xp + 10
    
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = Object.create(new Worker(0, 10, "Bob", 21, 110))
    intern.goToWork()
    return intern 
    
} 
// Task 4: Code a manager object, methods
function manager() {
    var manager = Object.create(new Worker(100, 30, "Alice", 30, 120))
    manager.doSomeThingFun()
    return manager
} 

