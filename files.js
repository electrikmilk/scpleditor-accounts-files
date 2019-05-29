$(document).ready(function() {
    if ($("#test").addEventListener) {
        $("#test").addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } else {
            $('body').on('contextmenu', '.file-list ul li', function() {
            $(".context-menu").show();
            document.getElementById("rmenu").style.top =  mouseY(event) + 'px';
            document.getElementById("rmenu").style.left = mouseX(event) + 'px';
            window.event.returnValue = false;
        });
    }
});

    $(document).bind("click", function(event) {
        $(".context-menu").hide();
    });

function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
       return evt.clientX + (document.documentElement.scrollLeft ?
           document.documentElement.scrollLeft :
           document.body.scrollLeft);
    } else {
        return null;
    }
}

function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
       return evt.clientY + (document.documentElement.scrollTop ?
       document.documentElement.scrollTop :
       document.body.scrollTop);
    } else {
        return null;
    }
}
