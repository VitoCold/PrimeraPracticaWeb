var x = document.getElementsByTagName("BODY")[0];

function HTMLGenerator() {
    
    this.a= function (texto) {
        var aEle = document.createElement("a");
        aEle.innerHTML = texto;
        return x.appendChild(aEle);
    }

    this.b= function (texto) {
        var bEle = document.createElement("b");
        bEle.innerHTML = texto;
        return x.appendChild(bEle);
    }

    this.p= function (texto) {
        var pEle = document.createElement("p");
        pEle.innerHTML = texto;
        return x.appendChild(pEle);
    }
    
    this.div = function (bloque, estilo) {
        var block = document.createElement(bloque);
        block.innerHTML="Esto es un nuevo DIV con estilo rojo";
        var div1 = document.createElement("div");
        div1.appendChild(block);
        div1.style = estilo;
        return x.appendChild(div1);
    }

    this.titulo = function (texto) {
        var hEle = document.createElement("h1");
        hEle.innerHTML = texto;
        return x.appendChild(hEle);
    }

    this.comentario = function (texto) {
        var commentEle = document.createComment(texto);
        return x.appendChild(commentEle);
    }

    this.spn = function (texto) {
        var txt = texto.split(' ');
        txt[3] = "<span style='color:yellow;font-weight:bold'>" + txt[3] + "</span>";
        var newTexto = txt[0] + " " + txt[1] + " " + txt[2] + " " + txt[3];
        var parrafo = document.createElement("p");
        parrafo.innerHTML = newTexto;
        x.appendChild(parrafo);
    }


};