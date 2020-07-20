console.log("Teste")

$(document).ready(function (){
    $('.enviar').click(function(event){
        event.preventDefault()
        console.log('Clicked button')

        var nome = $('.nome').val()
        var email = $('.email').val()
        var fone = $('.fone').val()
        var end = $('.end').val()
    })
})