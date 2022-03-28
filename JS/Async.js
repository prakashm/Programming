// Latest JS : Promises & async / await

//Option 1 : using then , execute sequentially
getFruits().then (function (fruits){
    console.log(fruits)
    return getVegetables()
}).then(function (vegetables){
    console.log(vegetables)
    return getDairy()
}).then( function(dairy){
    console.log(dairy)
});


//Option 2, execute all APIs at same time
Promise.all([getFruits(), getVegetables(), getDairy()]).then(function (results){
    const allGrocery = results[0].concat(results[1], results[2])
    return superFastSort(allGrocery)
}).then (function (sortedList){
    console.log(sortedList)
});

//option 3
(async function () {
    const [fruits, vegetables, dairy] = await Promise.all([getFruits(), getVegetables(), getDairy()])
    const groceryList = fruits.concat(vegetables, dairy)
    const sortedGrocery = await superFastSort(groceryList)
    console.log ( sortedGrocery)
})();

//Other option
async function go(){
    const food = await getFood()
    console.log(food)
}
go()

/* Simulated web APIs with random delay */

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

function delay(){
     const rnd = Math.random() * 1000;
        setTimeout( function(){
            resolve(["Gauva","Apple", "Banana"]);
        }, rnd);
}

//alternate for promise
async function getFood(){
    return ["Briyani", "Idli"]
}

/* function which returns promises */
function getFruits(){
    return new Promise(function (resolve, reject){
        const rnd = Math.random() * 1000;
        setTimeout( function(){
            resolve(["Gauva","Apple", "Banana"]);
        }, rnd);
    });
}

function getVegetables(cb){
    return new Promise(function (resolve, reject){
        const rnd = Math.random() * 1000;
        setTimeout( function(){
            resolve(["Onion","Ginger", "Beans"]);
        }, rnd);
    });
}

function getDairy(){
    return new Promise(function (resolve, reject){
        const rnd = Math.random() * 1000;
        setTimeout( function(){
            resolve(["Paneer","Milk", "Curd"]);
        }, rnd);
    });
}

function superFastSort(items){
    return new Promise(function (resolve, reject){
        const rnd = Math.random() * 1000;
        setTimeout( function(){
            resolve([...items].sort());
        }, rnd);
    });
}