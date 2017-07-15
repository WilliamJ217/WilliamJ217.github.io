$(document).ready(function() {
    $(".container").click(function() { //This is the main child of the App
        $(this).toggleClass("containerexpand");

        $(this).find("div").toggleClass("blocker");
        //Lifts the interaction ban, because if you never had the blocker in the first place, videos will be played without the container expanded, and this is bad.

        $(this).find(".wmark").toggleClass("wmarkexpand"); //This class allows Wmark to scale with media.

        $(this).find(".item").toggleClass("itemexpand"); //Without this, the media will not fill the container, and indirectly the screen for best quality.
                          
                          
        //THE VIDEO STILL PLAYS WHEN YOU CLICK THE CONTAINER, WHICH IS AVAILABLE WHEN THE SCALE OF THE WINDOW IS NOT 1;1 WITH THE MEDIA.  WHEN YOU CLICK THE CONTAINER TO SHRINK, THE VIDEO SHOULD STOP PLAYING.  THIS IS WHAT I'M STUCK ON, AS I DON'T KNOW HOW TO PROGRAM THIS FUNCTION.
    });
});