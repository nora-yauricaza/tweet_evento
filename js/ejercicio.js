
window.addEventListener("load",function(){
	var boton=document.getElementById("button");
	boton.disabled=true;
	boton.addEventListener("click",function(e){
		e.preventDefault();
		newTweet(document.getElementById("textarea").value);
		document.getElementById("textarea").value = "";
		boton.disabled=true;
	});

	function newTweet(textarea){
		var button = document.createElement("div");
		var contenedor=document.getElementById("contenedor");  
		var hora = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    	button.innerText=textarea + hora;

		if(!contenedor.childNodes[0]){
			contenedor.appendChild(button);
		}else{
			contenedor.insertBefore(button,contenedor.childNodes[0])
		}   
	}
});

window.addEventListener("keydown",function(){
	conteo(textarea);
	function conteo(textarea){
		button.disabled=false;
		var caracteres =140;
		var longitud=document.getElementById("textarea").value.length;
		document.getElementById("contenedor").innerHTML=caracteres-longitud;

		if(longitud>=120 && longitud<=130){
			document.getElementById("contenedor").classList.add("purple");
		}else if(longitud>=130 && longitud<=140){
			document.getElementById("contenedor").classList.add("yellow");
		}else if(longitud>=140){
			document.getElementById("contenedor").classList.add("blue");
			button.disabled=true;
		}
	}

	var textarea = document.querySelector('textarea');
	textarea.addEventListener('keydown', autosize);
	function autosize(){
  		var el = this;
  		setTimeout(function(){
   		el.style.cssText = 'height:auto; padding:0';
    	el.style.cssText = 'height:' + el.scrollHeight + 'px';
  		},0);
	}
	
});


