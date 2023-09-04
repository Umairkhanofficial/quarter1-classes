"use strict";
let todo = ["breakfast", "lunch"];
console.log(todo);
let len = todo.length;
console.log(len);
if (todo.length % 2 == 0) {
    todo.splice(todo.length - 1, 1, "add");
}
console.log(todo);
// }
// var index:number = 1
// while(index <= 10){
//     var result:number = 5 * index;
//     console.log("5","x"+index, "="+result );
//     index = index ++;
//}
