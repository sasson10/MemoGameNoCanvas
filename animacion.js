$(document).ready(function() {


    $('.flip').toggle(
            function() {
            	$( this ).find ('.card').addClass('flipped');
            	id = $( this ).attr('id');
            	console.log (id);
            },
            function() {
                $( this ).find ('.card').removeClass('flipped');
            }
    );

    /*function clickFunction(){
    	alert("diste click en la imagen");
    }*/

    this.clickFunction = function(e){
    	alert("diste click en la imagen");
    	var Imagen1 = document.getElementsByClassName("contenido");
    	console.log(Imagen1);
    	//Imagen1.getAttribute("src");
    	console.log(e.getAttribute("src"));
    	//var src1 = Imagen1.getAttribute("src");
    	//console.log(src1);
    };

});
