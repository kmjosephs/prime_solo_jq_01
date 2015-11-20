$(function(){
/**
*
*/
  function Employee(firstName, lastName, employeeNumber, position, score, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeNumber = employeeNumber;
        this.position = position;
        this.score = score;
        this.salary = salary;
      }

    $('#employeeInfo').on('submit', function(event){

      var employeeData = $(this).serializeArray();
      console.log(employeeData);

      for (var i = 0; i < employeeData.length-1; i++){
        var employee = new Employee(employeeData[0].value, employeeData[1].value,
          employeeData[2].value, employeeData[3].value, employeeData[4].value);

      }
      $('.placedContent').append('<p>' + employee.firstName + ' ' + employee.lastName
       + ' ' + employee.employeeNumber + ' ' + employee.position + '</p>')

      console.log(employee);
      event.preventDefault();
    });



});
