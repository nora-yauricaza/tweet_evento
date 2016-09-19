
window.addEventListener("load",function(){
	var boton=document.getElementById("button");
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var texto =document.getElementById("textarea").value;
		newTweet(texto);
		document.getElementById("textarea").value = "";

	});

	function newTweet(texto){
		var button = document.createElement("div");
		var contenedor=document.getElementById("contenedor");
		button.innerText=texto;

		if(!contenedor.childNodes[0]){
			contenedor.appendChild(button);
		}else{
			contenedor.insertBefore(button,contenedor.childNodes[0])
		}
	}
});
