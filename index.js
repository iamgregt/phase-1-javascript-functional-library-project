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
    for(let i = 0; i < newCollection.length ; i++){
        let newArray = []
        newArray.push(callback(newCollection[i]))
        console.log(newArray)
        return newArray
        
    }
    return collection
}

