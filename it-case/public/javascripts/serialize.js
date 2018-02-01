function myserialization(){
  if(valid()){
    document.getElementById("json").innerHTML=serialize(document.forms[0]);
    document.getElementById("new-car-form").reset(); //So the form fields are empty after a submission
  }
}

//Validation of the inputs (detta ska nog göras i vår backend istället så att vi checkar att id är unikt)
function valid(){
  var id=document.getElementById("id").value
  var brand=document.getElementById("brand").value;
  var model=document.getElementById("model").value;
  var price=document.getElementById("price").value;
  if(id===''||brand===''||model===''||price===''){
    alert("Please fill in all fields before Submitting");
    return false;
  }else if(!(typeof id=="number")){
    alert("The ID must be a number, please try again");
    return false;
  }else if(!(typeof brand=="string")){
    alert("The value for Brand is incorrect, must be String. Please try again");
    return false;
  }else if(!(typeof model=="String")){
    alert("The value for Model is incorrect, must be String. Please try again")
    return false;
  }else if(!(typeof price=="number")){
    alert("The Price must be a number, please try again");
    return false;
  }else{
    return true;
  }
}
