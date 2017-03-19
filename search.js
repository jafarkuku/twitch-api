
$(document).ready(function(){
  //$(".searchbar").on('change,keyup,keydown', function(){
    //var searchQuery = $(this).val();
    var url = [];
    var defaultChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var searchQuery = document.getElementsByClassName('searchbar').value;
    var names = [];
    var request;
    var getData = function(data){
      console.log(data);
    };
var promise = new Promise(function(resolve,reject){
    for (a=0; a<defaultChannels.length; a++){ //loop through default channels
        url.push("https://wind-bow.gomix.me/twitch-api/channels/"+defaultChannels[a]+"?callback=?");
    }
    console.log(url);
    for(b=0; b<url.length; b++){
      $.getJSON(url[b]).then(getData);
      console.log(request);
    }

});

/*promise.then(function(){
  console.log("hello");
  for(b=0; b<url.length; b++){
    request =
    console.log(request);
  }
})*/

});
