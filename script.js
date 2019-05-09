document.addEventListener('DOMContentLoaded', function() {
  // Write your JavaScript below. After you finish a section, comment out the code. 
  
  console.log("*********SQUARED NUMS***********");
  ///////////// SQUARED NUMS ////////////////////
  ///////////////////////////////////////////////
  // function squaredNums(myArray){
  //   var newArray=[];
  //   for(var i=0; i<myArray.length;i++){
  //     // newArray[i]=myArray[i]*myArray[i];
  //     newArray.push(myArray[i]*myArray[i]);
  //   }
  //   return newArray;
  // }


  //test
  function printArray(myArray){
    for(var i=0;i<myArray.length;i++){
      console.log(myArray[i]);
    }
  }

  // printArray(squaredNums([1,2,3]));

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********BIG FATHER***********");
  ///////////// BIG FATHER //////////////////////
  ///////////////////////////////////////////////
  // function bigFather(myArray){
  //   //will capitalize all array contents
  //   var newArray=[];
  //   for(var i=0; i<myArray.length;i++){
  //     newArray.push(myArray[i].toUpperCase());
  //   }
  //   return newArray;
  // }

  // //test
  // printArray(bigFather(["luke","i", "am", "your", "father"]));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********COUNT VOWELS***********");
  //////////// COUNT VOWELS  ////////////////////
  ///////////////////////////////////////////////
  //takes string and returns the number of vowels found in the string
  // function countVowels (myString){
  //   var vowelCount =0;
  //   for(var i=0;i<myString.length;i++){
  //     if(myString[i]=="a"||myString[i]=="e"||myString[i]=="i"||
  //       myString[i]=="o"||myString[i]=="u"||myString[i]=="A"||
  //       myString[i]=="E"||myString[i]=="I"||myString[i]=="O"||
  //       myString[i]=="U"){
  //       vowelCount++;
  //     }
  //   }
  //   return vowelCount;
  // }

  // console.log(countVowels("hello"));
  // console.log(countVowels("aaaaaaaapples"));

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********BIG STRINGS***********");
  //////////// BIG STRINGS  /////////////////////
  ///////////////////////////////////////////////
  //takes array of strings and returns a new array 
  //containing all the strings that were longer than 10 chars
  // function bigStrings(myArray){
  //   var newArray =[];
  //   for(var i=0;i<myArray.length;i++){
  //     if(myArray[i].length>10){
  //       newArray.push(myArray[i]);
  //     }
  //   }
  //   return newArray;
  // }

  // printArray(bigStrings(['hi', 'how', 'are', 'you', 'doing today', "12345678910", "ff"]));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********SENTENCE JOINER***********");
  //////////// SENTENCE JOINER  /////////////////
  ///////////////////////////////////////////////
  // function sentenceJoiner(myArray){
  //   var mySentence;
  //   var cleanedArray=[];
  //   var temp="";
  //   for(var i=0;i<myArray.length;i++){
  //     temp=myArray[i].trim();
  //     temp=temp.toLowerCase();
  //     cleanedArray.push(temp);
  //   }
  //   for(i=0;i<cleanedArray.length;i++){
  //     if(i==0){
  //       mySentence=(cleanedArray[i].charAt(0).toUpperCase())+(cleanedArray[i].substr(1))+" ";
  //     }else if(i!=(cleanedArray.length-1)){
  //       mySentence = mySentence + cleanedArray[i] +" ";
  //     }else{
  //       mySentence = mySentence + cleanedArray[i]+".";
  //     }
  //   }
  //   return mySentence;
  // }

  //test
  // console.log(sentenceJoiner(['hi', 'how', 'are', 'you', 'doing today']));
  // console.log(sentenceJoiner(['   hi', 'how   ', '  are    ', '   you', 'doing today']));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********LONGEST PHRASE***********");
  //////////// LONGEST PHRASE  //////////////////
  ///////////////////////////////////////////////
  //takes an array of strings and returns the longest phrase
  // function longestPhrase (myArray){
  //   var longestCount=0;
  //   var tempCount;
  //   var longestString="";
  //   for(var i=0; i<myArray.length;i++){
  //     tempCount = myArray[i].length;
  //     if(tempCount>longestCount){
  //       longestCount=tempCount;
  //       longestString=myArray[i];
  //     }
  //   }
  //   return longestString;
  // }

  // //test
  // console.log(longestPhrase(['hi', 'how', 'are', 'you', 'doing today']));




  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********Challenge, Challenge, Challenge***********");
  //////   Challenge, Challenge, Challenge  //////
  ///////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `countNums` below. 
    //takes in array of nums AND a target number. returns the number of times
    //your target num is found in the array
    // function countNums(myArray, targetNum){
    //   var targetHitCount=0;
    //   for(var i=0;i<myArray.length;i++){
    //     if(myArray[i]==targetNum){
    //       targetHitCount++;
    //     }
    //   }
    //   return targetHitCount;
    // }

    // //test
    // console.log(countNums([1, 2, 3, 2, 2, 1, 6], 2));
    // console.log(countNums([1, 2, 3, 2, 2, 1, 6], 6));


    
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `ninetyNineBottles` below. 
    //prints the lyrics 99 bottles of beer on the wall
    //loop but don't use an array
  //   function ninetyNineBottles(){
  //     var start=99
  //     var end=0
  //     for(var i=start;i>end;i--){
  //       if(i==1){
  //         console.log(i +" bottle of beer on the wall, "+ i +" bottle of beer.");
  //         console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  //       }else if(i==2){
  //         console.log(i +" bottles of beer on the wall, "+ i +" bottles of beer.");
  //         console.log("Take one down and pass it around, "+ (i-1) +" bottle of beer on the wall.");
  //       }else{
  //         console.log(i +" bottles of beer on the wall, "+ i +" bottles of beer.");
  //         console.log("Take one down and pass it around, "+ (i-1) +" bottles of beer on the wall.");
  //     }
  //   }
  //    console.log("No more bottles of beer on the wall, no more bottles of beer.");
  //    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  // }

  // //test
  // ninetyNineBottles();

    
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `buildATree` below. 
    //takes a numer 'n' and console.logs a tree made of 'n' rows 
    //of asterisks
    // function buildATree(n){
    //   var temp;
    //   for(var i=1;i<=n;i++){
    //     temp="";
    //     //spaces
    //     for(var j=(n-i); j>0;j--){
    //       temp = temp +" ";
    //     }
    //     //stars         
    //     for(var l=1;l<=i;l++){
    //       if(l==i){
    //         temp = temp+"*";
    //       }else{
    //         temp = temp+"* ";
    //       }
    //     }
    //     //spaces
    //     for(var p=(n-i); p>0;p--){
    //       temp = temp +" ";
    //     }
    //     console.log(temp);
    //   }
    // }

    // //test
    // buildATree(3);
    // buildATree(5);
        



    
  //////////////////////////////////////////////////////////////////////////
  //fibonacciArray
  function fibonacciArray(n){
    var myArray=[];
    for(var i=1;i<=n;i++){
      if(i==1||i==2){
        myArray.push(1);
      }else{
        myArray.push(myArray[i-3]+myArray[i-2]);
      }
    }
    return myArray;
  }
  //test

  printArray(fibonacciArray(5));

  //fibonacciString
  function fibonacciString(n){
    var myTempArray =fibonacciArray(n);
    var myString = myTempArray.join(', ');
    return myString;
  }

  //test
  console.log(fibonacciString(5));
  console.log(fibonacciString(10));
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////





})