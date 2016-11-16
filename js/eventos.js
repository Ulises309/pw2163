// DOM = Modelo de objetos del documento

var inicio = function()
{
	var dameclick = function()
	{
	    	$.ajax({
 			url: 'https://randomuser.me/api/',
 			dataType: 'json',
	  		success: function(data) {
	    				$("#txtNombre").val(data.results[0].name.first+" "+data.results[0].name.last);
	    				$("#imgFoto").attr("src",data.results[0].picture.large);
	  		}
		});
      
	}
	$("#dameClick").on("click",dameclick);
}

//Inicializar nuestro Documento
$(document).on("ready",inicio); // jquery es igual a $, jquery("elemento").on();