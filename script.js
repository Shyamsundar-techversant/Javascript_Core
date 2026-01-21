
/* * Call stack
    var n = 2;
    function square(num){
        var ans = num*num;
        return ans;
    }
    var square2 = square(n);
    var square4 = square(4)

* Hoisting

    var x = 7; 
    console.log(getName);
    function getName(){
        console.log("Hello");
    }
    getName();

    getName();
    let getName = () =>{
        console.log("Hi");
    }

    

 **.How function works
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
    }*/

// Lexical Scope,Scope Chain,Lexical Environment
 /*function a(){
    function b(){
        console.log(x);
    }
 }
 var x = 10;
 a();*/

 //let,var,const
  /*console.log(a);
 let a = 10;*/

 //Block,block scope
    /*  let a = 20;
    {
        var a = 10;
        let b = 11;
        const c = 12;
    }
    */
/*    function a(){
    var b = 7;
    function c(){
        console.log(b);
    }
    c();
   }
   a(); */

//Immediately Invoked Function Expression(IIFE)
/*     let a = (function () {
    var privateVar = "I am private";
    return privateVar;  // Works inside
    })();
    console.log(a);
    // Throws a type error . a is not a function. 
    console.log(typeof privateVar); */


//    Module Design Pattern with closure



//setTimeOut 
    /* function x(){
        var a = 1;
        setTimeout(function(){
            console.log(a)
        },3000);
        console.log("Hellooo");
    }
    x();
    */
/*     function x(){
        for(var a = 1;a<=5;a++){
            setTimeout(function(){
                console.log(a);
            },a*1000);
        }
    }
    x(); */

/*         function x(){
            for(const a = 1;a<=5;a++){
                setTimeout(function(){
                    console.log(a);
                },a*1000);
            }
        }
        x(); */

/*     function x(){
        for(var i = 1;i<=5;i++){
            function close(i){
                setTimeout(function(){
                    console.log(i);
                });
            }
            close(i);
        }
    }
    x(); */

// Callback function
    /*  setTimeout(()=>{
            console.log("a");
        },5000);
        function x(y){
            console.log("b");
            y();
        }
        x(function y(){
            console.log("d");
        }); */

    /*let count = 0;
    document.getElementById('click').addEventListener('click',function xyz(){
        console.log("button clicked",++count);
    }) */

/*     function attachEventListener(){
        let count = 0;
        document.getElementById('click').addEventListener('click',function xyz(){
            console.log("Button clicked",++count);
        })
    }
    attachEventListener(); */