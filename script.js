$(document).ready(function(){
    // var color = randomColor(); // a hex code for an attractive color
    
    var numberOfColors = $( "#numberOfColors" ).val();
    
    console.log(numberOfColors);
    
    $('submitBtn').on( 'click', function (event) {
        event.preventDefault();
        generateColors();
    });
    
    function generateColors() {
        var colors = [];

        for (var i = 0; i <= numberOfColors; i++ ) {
            colors[ i ] = randomColor();
        }
        
        return colors;
    }
    
    console.log( generateColors() );
});
