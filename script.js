
// * Call stack
    // var n = 2;
    // function square(num){
    //     var ans = num*num;
    //     return ans;
    // }
    // var square2 = square(n);
    // var square4 = square(4)

// * Hoisting

    // var x = 7; 
    // console.log(getName);
    // function getName(){
    //     console.log("Hello");
    // }
    // getName();

    // getName();
    // let getName = () =>{
    //     console.log("Hi");
    // }

    

//4.How function works
    //case 1
    var x = 1;
    a();
    b();
    console.log(x);
    function a(){
        var x = 10;
        console.log(x);
    }
    function b(){
        var x = 100;
        console.log(x);
    }
