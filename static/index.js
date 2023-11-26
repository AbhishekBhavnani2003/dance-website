function validateForm() {

    //mobile no 
    let y = document.forms["contactform"]["phone"].value;

    y.addEventListener('input', () => {
      y.setCustomValidity("");
      y.checkValidity();
    });

   y.addEventListener('invalid', () => {
      if(y.value === '') {
        y.setCustomValidity('Enter phone number!');
      } else {
        y.setCustomValidity("Enter phone number in this format:123-456-7890");
      }
    });


    // age 

    let z = document.forms["contactform"]["age"].value;

    if(z<0 || z>99)
    {
      alert("enter valid age between 0 to 99 ") ;
      return false ; 
    }













  }