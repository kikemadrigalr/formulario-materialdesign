//(function(){

    //acceder al form con name formulario_registro
    var formulario = document.formulario_registro;
    
    // acceder a los elementos del formulario    
    var elementos = formulario.elements;

    //functiones

    var validarInputs = function(){
        for(var i = 0; i < elementos.length; i++)
        {
            if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password")
            {
                if(elementos[i].value == 0 || elementos[i].value == "")
                {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + ' error';
                    return false;
                }
                else
                {
                    elementos[i].className = elementos[i].className.replace(' error', "");
                }
            }
        }

        console.log("pasword");
        console.log(elementos.pass.value);
        console.log(elementos.pass2.value);

        if(elementos.pass.value !== elementos.pass2.value)
        {
            console.log("validarPassword")
            elementos.pass.value = "";
            elementos.pass2.value = "";
            elementos.pass.className = elementos.pass.className + " error";
            elementos.pass2.className = elementos.pass2.className + " error";
        }
        else
        {
            elementos.pass.className = elementos.pass.className.replace(" error", "");
            elementos.pass2.className = elementos.pass2.className.replace(" error", "");
        }

        return true;
    };

    var validarRadios = function(){
        var opciones = document.getElementsByName('sexo'),
            resultado = false;

        for(var i = 0; i<elementos.length; i++)
        {
            if(elementos[i].type == "radio" && elementos[i].name == "sexo")
            {
                for(var o = 0; o < opciones.length; o++)
                {
                    if(opciones[o].checked)
                    {
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false)
                {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log("Campo Sexo Incompleto"); 
                    return false;
                }
                else
                {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true; 
                }
            }
        }

    };

    var validarCheckbox = function(){
        var opciones = document.getElementsByName('terminos'),
            resultado = false;

        for(var i = 0; i < elementos.length; i++)
        {
            if(elementos[i].type == "checkbox")
            {
                for(var o = 0; o < opciones.length; o++)
                {
                    if(opciones[o].checked)
                    {
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false)
                {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log("Aceptar Terminos"); 
                    return false;
                }
                else
                {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true; 
                }
            }
        }
    };    

    var enviar = function(e){ //con e se va a prevenir algun evento
        if(!validarInputs())
        {
            console.log('Falto validar Inputs');
            e.preventDefault();
        }
        else if(!validarRadios())
        {
            console.log('Falto Validar Radios');
            e.preventDefault();
        }
        else if(!validarCheckbox())
        {
            console.log('Falto validar Checkbox');
            e.preventDefault();
        }
        else
        {
            console.log('Enviar Correctamente');
            //comentar esta linea para que se envien los datos
            //no prevenir el envío
           // e.preventDefault();
        }

    }; 

    //focus
    var focusInput = function(){
        //agregar clase active al hacer focus
        this.parentElement.children[1].className = "label active"; 
        // this.parentElement.children[1].classList.toggle("active");
        //si el input esta focus quitar clase error
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
        
    }

    var blurInput = function(){
        // comprobar si esta vacio el input
        if(this.value <= 0)
        {   //quitar clase active si se hace blur
            this.parentElement.children[1].className = "label";
            // this.parentElement.children[1].classList.toggle("active");
            // al hacer blur, si el input esta vacio agrego class
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    }

    //eventos

    //submit
    formulario.addEventListener("submit", enviar); 

    //recorrer los Inputs
    for(var i = 0; i < elementos.length; i++)
    {
        if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password")
        {
            elementos[i].addEventListener("focus", focusInput); //escuchar evento focus
            elementos[i].addEventListener("blur", blurInput); //escuchar evento blur
        }
    }
//}())