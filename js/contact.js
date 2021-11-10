

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e)=>{
    let name = document.getElementById("form_name");
    let email = document.getElementById("form_email");
    let message = document.getElementById("form_message");

    contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        let formData = {
            name: name.value,
            email: email.value,
            message: message.value

        }
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText == 'success'){
                alert("email sent");
                name.value= '';
                email.value = '';
                message.value = '';
            }else{
                alert('something went wrong')
            }
        }

        xhr.send(JSON.stringify(formData) )
    })
});

console.log('jesus is lord')

