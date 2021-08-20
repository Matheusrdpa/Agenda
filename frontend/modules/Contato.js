import validator from 'validator';

export default class Contato {
    constructor(formClasse){
        this.form = document.querySelector(formClasse);
    }
    init(){
        this.eventos();
    }

    eventos(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validar(e);
        })
    }

    validar(e){
        const el = e.target;
        let letters = /^[a-zA-Z\s]*$/;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false; 

         if(!nomeInput.value.match(letters)){
            alert('Nome invalido.');
            error = true;
        };

        if(!sobrenomeInput.value.match(letters) && sobrenomeInput.value > 0){
            alert('Sobrenome invalido.');
            error = true;
        };


        if(!validator.isEmail(emailInput.value) && emailInput.value > 0) {
            alert('E-mail inválido.');
            error = true;
          };

          if(!validator.isMobilePhone(telefoneInput.value, 'pt-BR') && telefoneInput.value > 0){
            alert('Telefone Invalido.');
            error = true;
        };
        
        if(!error) el.submit();
    };
}