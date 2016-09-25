$(document).ready(function(){
  //SET'S UP AND CREATES CALENDAR
  function createCalendar(){
    var d = new Date();
  var monthNames = ['Null','January', 'February', 'March', 'April',
                   'May', 'June', 'July', 'August', 'September',
                   'October', 'November', 'December'];
  var month = d.getMonth() + 1;
  var year = d.getFullYear();   
  var firstDate = monthNames[month] + " " + 1 + " " + year;
  //September 1 2016
  var currentMonthStart = new Date(firstDate).toDateString();
  //Thu Sep 01 2016 ...  
  var firstDay = currentMonthStart.substring(0, 3);   
  //Thu 
  var dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var dayNum = dayNames.indexOf(firstDay);
  // 4 => Thursday is the 5th of the week (0-6)
  var days = new Date(year, month, 0).getDate();
  // 30 => number of days in September
  var weeks = Math.ceil(days/7);
  // 5 weeks rounded up


    //FILL IN MONTH IN YEAR
    $('.month-and-year').html(monthNames[month] + ' ' + year);
    //FILL IN DAYS OF WEEKDAYK
    for(var i = 0; i < dayNames.length; i++) {
     $('.days-of-week').append('<th>' + dayNames[i]+ '</th>'); 
    };

    //CREATE 1ST ROW AND FILL IN WITH DATES, SPOTS 0-4 SHOULD BE EMPTY STRINGS
    var tr = $('<tr></tr>');
    var count = 1; 
    for(var i = 0; i <= 6; i++){
      var td = $('<td></td>');
      if(i < dayNum) {
        td.html(" ");
      } else {
        td.html(count);
        count++;
      }
      td.appendTo(tr);
    }
    $('.dates').append(tr);
    
    weeks--; //subtract a week - tells us how many more rows to build

    //CREATE 2ND AND REST OF THE ROWS UNTIL VAR DAYS
    //USE COUNT AGAIN TO INCREMENT THE DAYS

    for(var r = 0; r < weeks; r++){
      //outter loop creates the rows
      var tr = $('<tr></tr>');
      for(var c = 0; c <= 6; c++){
        //inner loop creates the cells
        var td = $('<td></td>');
        if(count > days) {
          //once we reach the num of days for the month
          //fill the rest of the cells with empty string
          td.html(" ");
          td.appendTo(tr);
        } else {
          td.html(count);
          count++;
          td.appendTo(tr);
        }
      }
      $('.dates').append(tr);
    }





    }//end of createCalendar
  createCalendar();

  











})//  DOCUMENT.READY