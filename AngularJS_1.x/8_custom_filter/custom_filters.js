app.filter("London", function(){
  console.log("inside filter");

  //custom filter should return a function
  return function(city){ //city is the input for this filter
    console.log(city);
    if(city == "London"){
      return "London";
    }else{
      return "---";
    }
  }
});

app.filter("spamMail", function(){ //$sce
  return function(email){
    console.log(email)
    if(email == "pbell8@qq.com"){
      return "pbell8@qq.com <span class='glyphicon glyphicon-alert'></span>";

      //return $sce.trustAsHtml(`pbell8@qq.com <span class='glyphicon glyphicon-alert'></span>`);
    }
  }
});