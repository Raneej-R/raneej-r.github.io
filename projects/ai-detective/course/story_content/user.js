window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

var text =
"Incoming Secure Transmission...\n\nHey, Secret Agent.\n\nThe AI Inspection Lab requires your help.\n\nWill you accept the mission?";

var i = 0;

function typeWriter(){

    player.SetVar("TerminalText", text.substring(0,i));

    i++;

    if(i<=text.length){

        setTimeout(typeWriter,40);

    }

}

typeWriter();
}

};
