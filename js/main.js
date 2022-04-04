let error_message = document.getElementById( "error-massage" );
let output_message = document.getElementById( "output-massage" );
let but = document.querySelector(".button");
let text = document.querySelector( ".container form input" );



output_message.style.display = "none";
but.onclick= function(){
    if ( text.value === "" )
    {  
        error_message.style.display = "block";
        const myTimeout = setTimeout( myStopFunction , 3000 );
    
    }else
    {
        output_message.style.display = "block";
        output_message.innerText = text.value;
        text.value = "";
        let val = setTimeout( stop, 12000 ); 
    }
};
text.onclick = function ()
{
    if ( output_message.innerText.length > 0 )
    {
        output_message.style.display = "none";
        output_message.innerText = "";
    }
}

            function stop(){
                        output_message.style.display = "none";
                        clearTimeout(val);
                        }
            function myStopFunction()
                {
                    error_message.style.display = "none";
                    clearTimeout(myTimeout);
            }