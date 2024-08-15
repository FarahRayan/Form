document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById('firstName').value;
     var lastName = document.getElementById('lastName').value;
    var photoInput = document.getElementById('photoInput');
    var photoURL = '';


          if (photoInput.files.length > 0) {
        var file = photoInput.files[0];
    var reader = new FileReader();

        reader.onloadend = function() {
            photoURL = reader.result;
        displayResult();
        };

        reader.readAsDataURL(file);
    } else {
        displayResult("No file chosen");
    }

function displayResult() {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
         <h3>your nformation</h3>
        <p>First Name: ${firstName}</p>
             <p>Last Name: ${lastName}</p>
            ${photoURL ? `<img src="${photoURL}" alt="Uploaded Photo"/>` : ''}
        `;
    }
});
