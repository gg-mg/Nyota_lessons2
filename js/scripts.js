// business logic
function EmailAddress(email, password) {
    this.email = email;
    this.password = password;
  }
  
  Contact.prototype.fullName = function () {
    return this.email + " " + this.password;
  }
  
  // user interface logic
  $(document).ready(function () {
    $("form#new-email").submit(function (event) {
      event.preventDefault();
  
      var inputtedemail = $("input#exampleInputEmail1").val();
      var inputtedpassword = $("input#exampleInputPassword1").val();
  
      var newContact = new Contact(inputtedemail, inputtedpassword);
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.email + "</span></li>");
   
      // $("input#exampleInputEmail1").val("");
      // $("input#exampleInputPassword1").val("");
      
      // $(".contact").last().click(function () {
      //   $("#show-contact").show();
      //   $("#show-contact h2").text(newContact.firstName);
      //   $(".first-name").text(newContact.firstName);
      //   $(".last-name").text(newContact.lastName);
      // });
  
  
    });
  });