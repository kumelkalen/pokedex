$(document).ready(function($){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/', //Link datos pokemones
		type: 'GET', // Pedimos obtener datos
		dataType: 'JSON', // Definimos tipo de dato
		data:{"limit": '10'}, // Lo limitamos a que se emuestren de 10;
	})

});