
var num_prompts = 20
var NumberOfWords = 28

var prompts = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
prompts[1] = "What do I know to be true that I didn’t know a year ago?"
prompts[2] = "What distractions get in the way of being my most productive?"
prompts[2] = "What distractions get in the way of being my most productive?"
prompts[3] = "When do I feel most in tune with myself?"
prompts[4] = "If someone described me, what would they say?"
prompts[5] = "What can wait until next week?"
prompts[6] = "How does every part of my body feel in this moment?"
prompts[7] = "What emotions am I holding on to?"
prompts[8] = "How can I detach or neutralize any bad emotions?"
prompts[9] = "What hurts right now? How can I find relief?"
prompts[10] = "When I look in the mirror, what do I see?"
prompts[11] = "What are the things in my home that are the most “me”?"
prompts[12] = "Describe the last time you were truly happy"
prompts[13] = "What are you grateful for today?"
prompts[14] = "What was your greatest fear, and how did you conquer it?"
prompts[15] = "Write a letter to someone that you always want to thank."
prompts[16] = "What is something that you would like to change about yourself?"
prompts[17] = "Describe your dream job/partner/house"
prompts[18] = "Where’s one place that you’d like to visit, and why?"
prompts[19] = "Wwhat would you use it for?"
prompts[20] = "List down a bucket list with the things that you have always wanted to do."

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = prompts[rnd]
}

String.prototype.isEmpty = function(){
    return (this.length === 0 || !this.trim());
};

var guestMessages = {
    msgs: [],

    getMessages: function(msg){

        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() ;

        var dateTime = date+' '+time;

        this.msgs.push("[" + dateTime + "] " + value + "<br />");

    },

    printMessages: function(){
        guestMessages.getMessages();
        var showEntry = document.getElementById("first-entry").innerHTML = this.msgs;

    }
};

var getEntry = function(){
    value = document.getElementById("content").value;
    return value;
};

var clearDiv = function(){
  document.getElementById("content").value = "";
}


var isEmpty = function(entry){
    entry = getEntry();
    var output = document.getElementById("content").value;
    if ( output == '' ){
              alert("Enter a message");
    }
     else {
      guestMessages.printMessages();
    }
}

