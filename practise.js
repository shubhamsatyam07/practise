
//let user={
//	name:"shubham",
//	age:21
//	"lovefootball"=true
//}

//let key = prompt("What do you want to know about the user?");

//alert(user[key]); 
/*function makeUser(name, age) {
  return {
    name,
    age
    
  };
}

let user = makeUser("shubham", 21);
alert(user.name);
alert("age" in user) //for checking if its true or not
//using for loop 
*/
/*let user = {
  name: "shubham",
  age: 21,
  lovesfootball: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key]);
  }*/ 
  //object.assign method to copy
  let user = {
  name: "shubham",
  sizes: {
    height: 178,
    weight: 65
  },
  helloworld:function(){
  	alert(this.name);
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.weight++;       // change a property from one place
alert(clone.sizes.weight);
user.helloworld();
