// const myCallBack = function(collection){
//     for(let i = 0; i < collection.length ; i++){
//         console.log(collection[i])
//          alert(collection[i])
//          return collection
//     }
// }

// const myCallBack = function(e){
//     newCollection.push(i * 3)
// }


function myEach(collection, callback){
    let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
    console.log(newCollection)
    for(let i = 0; i < newCollection.length ; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
    let newArray = []
    for(let i = 0; i < newCollection.length ; i++){
        newArray.push(callback(newCollection[i]))
        console.log(newArray)
        
    }
    return newArray
}

function myReduce(collection, callback, acc){
    let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
    if(!acc){ //if there is no acc
        acc = newCollection[0] //our start value is the first number
        newCollection = newCollection.slice((1)) //array starts at the next index index[1]
    }
 
    for (let i = 0 ; i < newCollection.length ; i++){ //if we have an acc i
        let val = newCollection[i]
        acc = callback(acc, val, newCollection)
    }
    console.log(acc)
    return acc
}

function myFind(collection, callback){
    for(let accessor in collection) {
        let element = collection[accessor]
        if(callback(element)) {
            return element
        }
    }
}

function myFilter(collection, callback){
    let arr = []
    for (let accessor in collection){
         let element = collection[accessor]
         if(callback(element)) {
             arr.push(element)
         }
         
    }
    return arr
}

function mySize(collection){
    let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
    return newCollection.length
}

function myFirst(array, n){
    if(n){
        return array.slice(0,n)
    }else
    return array[0]
}

function myLast(array, n){
    if(n){
        return array.slice(-n)
    }else
    return array[array.length - 1]
}

function myKeys(obj){
    return Object.keys(obj)
}

function myValues(obj){
    return Object.values(obj)
}