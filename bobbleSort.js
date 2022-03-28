function bubbleSort(arr){
    var noSwap;
    for(var i = arr.length; i>0; i --){
        noSwap = true;
        for(var j =0; j< i-1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //swap
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        console.log("ONE PASS COMPLETE");
        if(noSwap) break;
    }
    return arr;
}
bubbleSort([6,1,2,3,4,5,7])