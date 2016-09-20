
window.addEventListener("load",function(){
	var boton=document.getElementById("button");
	boton.disabled=true;
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var textarea =document.getElementById("textarea").value;
		newTweet(textarea);
		document.getElementById("textarea").value = "";
		boton.disabled=true;
	});

	function newTweet(textarea){
		var button = document.createElement("div");
		var contenedor=document.getElementById("contenedor");
		button.innerText=textarea;

		if(!contenedor.childNodes[0]){
			contenedor.appendChild(button);
		}else{
			contenedor.insertBefore(button,contenedor.childNodes[0])
		}
	}

	window.addEventListener("keydown",function(){
	contenedor(textarea);
	});
	function contenedor(textarea){
		button.disabled=false;
		var caracteres =140;
		var longitud=document.getElementById("textarea").value.length;
		document.getElementById("contenedor").innerHTML=caracteres-longitud;
		if(longitud>=caracteres){
		button.disabled=true;
		}
	}
});

