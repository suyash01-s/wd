//object
//literals
let emp={
    id:101,
    name:"java",
    address:"pune"
}
console.log(emp);
console.table(emp)

//contuctor function

let stud={
    id:111,
    name:"abc",
    address:{
        s_street:"jm rode",
        s_area:"snagar",
        s_city:"pune"
    }
}
console.log(stud);
console.table(stud)

console.log(Object.keys(stud));
console.log(Object.values(stud));