function criar(){
    var pass1 = document.getElementById('txt3').value
    var pass2 = document.getElementById('txt4').value
    var email = document.getElementById('txt2').value
    var name = document.getElementById('txt1').value
    var erro = document.getElementById('erro')

    if(pass1 != pass2){
        erro.innerHTML = 'Suas senhas não concidem'
    } else {
        erro.innerHTML = 'Conta criada com sucesso!'
        erro.style.color = 'green'
    } if(pass1 == '' || pass2 == '' || email == '' || name == ''){
        alert('[ERRO] Confira os dados e tente novamente')
        erro.innerHTML = 'Parece que algo está errado...'
        erro.style.color = 'red'
    }
}

