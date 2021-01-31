//we write this function, which will hold all our code and will be called, when the page has considered itself to be fully loaded

function start() {
    //Testing the start function $("body").css("background-color","pink");
    $("#menu a:first").click();

}

// Telling the browser to trigger the function-"start", after having loaded the individual sections/parts of the website 

$(window).on("load", start);

function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");

    //select - the document, find the ul/li that is the id #menu belongs to and add the class active to it
    // $(document).li("#nav-link")add("#active") --- Attempt
    $(this).addClass("active");


    var href = $(this).attr("href");
    $("#content").load(href);
    
}

//Hey browser, please listen for click on any hyperlink, if you hear it please execute the loadpage function:
$(document).on("click", "#menu a", loadpage);