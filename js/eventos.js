// DOM = Modelo de objetos del documento

var inicio = function()
{
	var dameclick = function()
	{
		alert("le di click");
	}
	$("#dameClick").on("click",dameclick);
}

//Inicializar nuestro Documento
$(document).on("ready",inicio); // jquery es igual a $, jquery("elemento").on();