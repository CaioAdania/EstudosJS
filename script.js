let arr = [1,2,3,4,5];
let arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {

        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);

