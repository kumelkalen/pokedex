$(document).ready(function($){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/', //Link datos pokemones
		type: 'GET', // Pedimos obtener datos
		dataType: 'JSON', // Definimos tipo de dato
		data:{"limit": '10'}, // Lo limitamos a que se emuestren de 10;
	})
	.done(function(respuesta){
		console.log("success");
		mostrar(respuesta);	
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	})
	function mostrar(data){ //Recorremos la parte "results" del objeto
		data.results.forEach(function(pokeDatos){ 
			var habilidades = pokeDatos.abilities; //array
			var alto = pokeDatos.height;
			var peso = pokeDatos.weight;
			var nombre = pokeDatos.name;
			var id = pokeDatos.id;
		$("#poke-lista").append("<div class='cont-poke col-md-2'><img class='imagen' src='http://img.pokemondb.net/artwork/"+ nombre + ".jpg'><h4>"+ nombre +"</h4></div>");

		});
	}
});