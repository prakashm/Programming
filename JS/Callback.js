//Traditional method : Callback

// Option 1 - old method, difficult to maintain and understand the flow
getFruits(function(fruits){
    getVegetables(function(vegetables){
        getDairy(function(dairy){
            const allGrocery = fruits.concat(vegetables, dairy)
            superFastSort(allGrocery, function(sortedGrocery){
                console.log(sortedGrocery);
            })
        })
    })
})

//Option 2
let groceryList = []

function customLogic(){
    if  (groceryList.length == 3){
        const all = groceryList[0].concat(groceryList[1], groceryList[2])
        superFastSort(all, function(sortedGrocery){
            console.log(sortedGrocery)
        })
    }
}

getFruits(function(x){
    groceryList.push(x)
    customLogic()
})

getVegetables(function(x){
    groceryList.push(x)
    customLogic()
})

getDairy(function(x){
    groceryList.push(x)
    customLogic()
})


/* Simulated web APIs with random delay */

function getFruits(cb){
    const rnd = Math.random() * 1000;
    setTimeout( function(){
        cb(["Gauva","Apple", "Banana"]);
    }, rnd);
}

function getVegetables(cb){
    const rnd = Math.random() * 1000;
    setTimeout( function(){
        cb(["Onion","Ginger", "Beans"]);
    }, rnd);
}

function getDairy(cb){
    const rnd = Math.random() * 1000;
    setTimeout( function(){
        cb(["Paneer","Milk", "Curd"]);
    }, rnd);
}

function superFastSort(items, cb){
    const rnd = Math.random() * 1000;
    setTimeout( function(){
        cb([...items].sort());
    }, rnd);
}
