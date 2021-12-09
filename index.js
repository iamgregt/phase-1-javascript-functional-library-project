const myCallBack = function(){
    for(let i = 0; i < collection.length ; i++){
        console.log(collection[i])
    }
}

function myEach(collection, callback){
    callback(collection)
}


let collection = [1,2,3]
myEach([1,2,3], myCallBack)