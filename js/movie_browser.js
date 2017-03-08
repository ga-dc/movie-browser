// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {
  $("#movie-select").hide();

  $(".submit").on("click", () => {
    event.preventDefault()
    let search = $("#movie-search").val()
    let url = `http://www.omdbapi.com/?s=${search}`
    $("#movie-select").show();
    // removes all options from the select movie pull down bar
    $("#movie-select").empty();

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      // shows what was searched
      $("#movie-select").append(`<option> Movies matching "${search}"...</option>`)
      // runs through every result from the api search
      for (var i=0; i < response.Search.length; i++) {
        $("#movie-select").append(`<option value=${response.Search[i]}>${response.Search[i].Title}</option>`)
      }
      // $("#movie-select").append(`<option value="${}"></option>`)
    }).fail(() => {
      console.log("Search request fails!")
    })

  })


})
