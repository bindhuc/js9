// objects using curly braces

let obj1={
    names:"bindhu",
    age:22,
    contact:7864536,
    country:"india"
}
console.log(obj1)
console.log(obj1.names)// for particulqr object
console.log(obj1["contact"]) // for particular object

// this keyword

const obj2={
    names:"bindhu",
    age:22,
    contact:7864536,
    country:"india" ,
    display:function()  
    {
        console.log("my age is"+this.age+"my name is"+this.names)
    }
}
obj2.display()

// const object
const obj3=new Object()
obj3.name="bindhu"   // dot notation
obj3["name"]="bindhu" 
console.group(obj3);

// object keys


const obj4={
    names:"bindhu",
    age:22,
    contact:7864536,
    country:"india" ,
    display:function()  
    {
        console.log("my age is"+this.age+"my name is"+this.names)
    }
}
const myObjkeys=Object.keys(obj4)
console.log(myObjkeys)

const myObjvalues=Object.values(obj3)
console.log(myObjvalues)

// object create
const flags = Object.create(obj4)
console.log(flags)

const flags = Object.create(obj4)
console.log(flags.name)


// spread operator
const obj5={
    height:5,
    weight:50
}
const brain={
    iq:1
}
const person={
    ...obj5,
    ...brain
}
console.log(obj5)
console.log(person.height)

//2 destructure the array(line 70)
const arr =[1,2,3,4,5]
console.log(arr)
console.log(...arr)

// object create
const flags = Object.create(obj4)
console.log(flags)

// function constructor

function Employee (name,age){
    this.name = name;
    this.age=age;
}
const Employee1 = new Employee (" bindhu");
const Employee2 = new Employee (" bin");
console.log(Employee1)

