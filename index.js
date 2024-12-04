//Online Library Membership
var user="premium membership"
if(user=="Basic membership"){
    console.log("access to only free books");
}
else if(user=="standard membership"){
    console.log("access to free books and discounted paid books")
}
else if(user=="premium membership"){
    console.log("access to all books,including exclusive content")
}
else{
    console.log("Invalid Membership")
}
//E-commerce Discount Application
var customer="regular customer";
var purchase=300;
if(customer=="regular customer"){
    if(purchase<100){
        console.log("no discount")
    }
    else if(purchase>=100&&purchase<500){
        console.log(purchase=purchase-purchase*0.05)
    }
    else{
        console.log(purchase=purchase-purchase*0.1)
    }
}
else if(customer=="VIP customer"){
    // var purchase=400;
    if(purchase<100){
        console.log(purchase=purchase-purchase*0.1)
    }
    else if(purchase>=100&&purchase<500){
        console.log(purchase=purchase-purchase*0.15)
    }
    else{
        console.log(purchase=purchase-purchase*0.2)
    }
}
else{
    console.log("Invalid amount")
}

//academic scholrship eligibility
// var scholorship="merit-based scholorship";
gpa=3;
var extracurricularactivities=4;
communityservicehrs=150;
if(gpa>=3.5){
console.log("studemt is eligible for merit scholorship")
}
else if(extracurricularactivities>=2&&gpa>=3.0){
    console.log("student is eligible for leadership scholorship")
}
else if(communityservicehrs>=100&&gpa>=2.5){
console.log("student eligible for community service scholorship")
}
else if(gpa>=3.5&&extracurricularactivities>=2&&communityservicehrs>=100){
    console.log("student is eligible for multiple scholoships")
}
else{
    console.log("student is not eligible for any scholorship")
}
//movie ticket pricing
var age=12;
var dayoftheweek="weekends"
if(dayoftheweek=="weekdays"&&(age<=12||age>=65)){
price=12;
 console.log(price=price-price*0.5)
 }
 else if(dayoftheweek=="weekends"&&(age>=12||age>=65)){
price=15;
 console.log(price=price-price*0.3)
 }

//event reg validation
var age=21;
var numberofreg=90;
var email="provided";
if(age>=18&&numberofreg<=100&&email=="provided"){
    console.log("user can register for the event")
}
else{
    console.log("user cann't register for the event")
}