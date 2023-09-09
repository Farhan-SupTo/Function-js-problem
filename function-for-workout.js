function workout(WorkOutName){
         var ChestWorkOut =["Bench press","Push-up","Cable-cross-over"];
         var BicepWorkOut =["Biceps Curl","Hammer curl","Ez-bur curl"];
         var TricepWorkOut =["Push-down","Push-up","Dip"];

         if (WorkOutName=="Chest"){
            return ChestWorkOut
         }
         else if (WorkOutName=="Bicep"){
            return BicepWorkOut
         }
         else if (WorkOutName=="Tricep"){
            return TricepWorkOut
         }else{
            return "don't know"
         }
}

var workOutPlan = workout("hot")
console.log("workout plan is "+ workOutPlan)