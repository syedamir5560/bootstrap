let form = document.querySelector('.needs-validation')
form.addEventListener('submit',(e)=>{
    if( !form.checkValidity() ){
e.preventDefault()
    }else{
alert('SUCCESS')
    }

    form.classList.add('was-validated')
})