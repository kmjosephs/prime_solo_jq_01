$(function(){
/**
* Builds the Employee constructor to take in employee information
*/
  function Employee(firstName, lastName, employeeNumber, position, score, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeNumber = employeeNumber;
        this.position = position;
        this.score = score;
        this.salary = salary;
      }


/**
* Grabs the information from the form on submit, breaks it into an array of objects
then constructs a new employee object with the values from the array of objects
*/
    $('#employeeInfo').on('submit', function(event){


      var employeeData = $(this).serializeArray();
      console.log(employeeData);

      for (var i = 0; i < employeeData.length-1; i++){
        var employee = new Employee(employeeData[0].value, employeeData[1].value,
          employeeData[2].value, employeeData[3].value, employeeData[4].value);
      }

      var templateScript = $("#employeeListScript").html();
      var makeTemplate = Handlebars.compile(templateScript);
      var compiledHtml = makeTemplate({employees:employeeData});
      $('.employeeList').html(compiledHtml);
      /*$('.placedContent').append('<p>' + employee.firstName + ' ' + employee.lastName
       + ' ' + employee.employeeNumber + ' ' + employee.position + '</p>')*/

      event.preventDefault();
    });





});
