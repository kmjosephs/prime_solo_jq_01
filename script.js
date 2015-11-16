$(function(){


  function Employee(firstName, lastName, employeeNumber, position, score, salary){
      this.firstName = firstName;
      this.lastName = lastName;
      this.employeeNumber = employeeNumber;
      this.position = position;
      this.score = score;
      this.salary = salary;
    }

  var employeeArray = []; // creates an array to store the objects

  $('form#employeeInfo').on('submit', function(event){

    var employeeData = $(this).serializeArray(); //this pushes the form data to the array on submit
    for (var i=0; i < employeeData.length; i++){
      employeeArray.push(employeeData[i]); //creates an array of objects in employeeArray
    }
    event.preventDefault();
    console.log(employeeArray); // Just so I can tell that the code doing something
  })
/* I need to create a new Employee object with the elements in the array, could I use a forEach();
  employeeArray.forEach(function(elem){
  }) */

var newEmployee =  new Employee(employeeArray[0].value, employeeArray[1].value, employeeArray[2].value, employeeArray[3].value, employeeArray[4].value, employeeArray[5].value); //Maybe create a new object with the elemnts from the employee array
// returns "TypeErro:employeeArray[0] is undefined"

console.log("This is a test: ")
console.log(newEmployee.score);
/**
=======================
This code removes data from an element
$( "button" ).click(function() {
  $( "p" ).empty();
});

=======================
*/
    /*


      }

      for

      function writeToScreen{
        var $div = $('<div>');
        var $p = $('<p>');
        var $button = $('<button>');
        var $ul = $('<ul>');
        var $li = $('<li>');

        $ul.append()...
      }


      function writeToScreen(elem){
        firstName = elem[0].value;

        var newEmployee = new Employee(firstName)
        return employee;
      }
========================
    var employeeData = $(this).serializeArray();
    console.log(employeeData); */





});
