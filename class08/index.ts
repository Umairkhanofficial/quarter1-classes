type cartype={
    model:string;
    color:string;
    engine:string;
}
let car:cartype={
    model:"bwm",
    color:"white",
    engine:"x200",

}

console.log(car);

let cartype1:{
    model:string;
    color:string;
    engine:number;
} = {
   model:"bmc",
   color:"while",
   engine:400,
};
console.log(cartype1);



let fruits=[{
    name:"apple",
    quantity: 4,
    box:6,
},
{
  name :"banana",
  quantity:2,
  box:2,
}]

console.log(fruits[0],fruits[1].box);
 
type car2type={
    model:string;
    color:string;
    engine:string;
}
let car2:cartype={
    model:"Audi",
    color:"white",
    engine:"x200",

}

console.log(car2);
