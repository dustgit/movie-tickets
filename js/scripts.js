// business logic
function Ticket(age, when, time) {
  this.age = age;
  this.when = when;
  this.time = time;
}
Ticket.prototype.pricing = function() {
  console.log(this);
  if (this.when == "oldMovie") {
    return "4"
  } else if (this.age == "kidPrice") {
    return "5"
  } else if (this.age == "seniorPrice") {
    return "7"
  } else if (this.time == "beforeFive") {
    return "8"
  } else {
    return(10) }
  }
$(document).ready(function() {
  $("form#pricing").submit(function(event) {
    event.preventDefault();
var inputtedAge = $("input:radio[name=age]:checked").val();
var inputtedWhen = $("input:radio[name=when]:checked").val();
var inputtedTime = $("input:radio[name=time]:checked").val();
var ticket = new Ticket(inputtedAge, inputtedWhen, inputtedTime)

ticket.pricing()

var price = ticket.pricing();
$("#ticketPrice").text(price);
console.log(price);

  });
});
