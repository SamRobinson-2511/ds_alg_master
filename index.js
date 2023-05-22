function arrSplice(arr, element) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == element){
            console.log(element + " :found it")
        } else {
            console.log(element + " :unfound")
        }
    }
}
arrSplice([0, 1, 2, 3], 1);