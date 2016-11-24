// API Docs at:
// http://www.omdbapi.com
$("document").ready(function(){
  $("form").submit(function(evt){
    evt.preventDefault();
    var movieSearch = $("#movie-search").val().replace(/ /g, '+');
    var url = "http://www.omdbapi.com/?s=" + movieSearch + "&r=json"
    console.log(url);
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      for(i=0; i< response.Search.length; i++){
        $("#movie-select").append($('<option>',{
          value: response.Search[i].Poster,
          text: response.Search[i].Title
        }));
      }
    })
    $("#movie-select").toggle();
    //replacing all spaces
    $("#movie-select").on("change", function(){
      $("movie-detail").empty();
      movieSelection = $("#option-selected", this);
      movieDetails = this.value
      $("#movie-detail").append("<img src=" + movieDetails + ">")
          });
  })
})
