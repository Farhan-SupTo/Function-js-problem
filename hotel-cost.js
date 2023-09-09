var myDays=25;

var first10daysCost =500;
var Second10daysCost =300;
var Third10daysCost =100;


if ( myDays<=10){
    var TotalCost = myDays * 500;
   console.log("Your Hotel cost is " +TotalCost)
}else if(myDays>10 && myDays<=20){
    var first10daysCOst = 10 * 500;
    var remainingDays = myDays - 10;
    var totalDaysCost = remainingDays * 300;
    var Total11to20daysCost = first10daysCOst + totalDaysCost;
    console.log("Your Hotel cost is " +Total11to20daysCost);
}else if(myDays>20){
    var first10daysCOst = 10 * 500;
    var Second10daysCOst = 10 * 300;
    var remainingDays = myDays -20;
    var thirdToInfinityDaysCost =remainingDays * 100;
    var totalCostAbove20Days = first10daysCOst + Second10daysCOst + thirdToInfinityDaysCost;
    console.log("Your Hotel cost is " +totalCostAbove20Days)
}
