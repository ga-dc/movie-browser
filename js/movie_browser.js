// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();

  $("#search").submit(function(evt){
    evt.preventDefault();
    var query = $("#movie-search").val();
    var url = "http://www.omdbapi.com/?type=movie&s=" + query.split(" ").join("+");
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      $("#movie-select").show().empty().append($("<option>Movies matching " + query + "...</option>"));
      console.log(response)
      // for(i=0; i<response.length; i++){
      //   $("<option value = \"></option>")
      //   $("#movie-select").append
      //
      // }
    }).fail(function(){
      console.log("bad request broh")
    }).always(function(){
      // console.log("still workin broh")
    });
  })

})
