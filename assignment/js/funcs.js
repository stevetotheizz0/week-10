function filterByYear() {
  var sql = "SELECT * FROM nyc_flickr_photos_merge WHERE date >= '"+filterYear+"-01-01 00:00:00' and date < '"+filterYear+"-12-31 00:00:00' ";
  $.ajax('https://stephenjskilton.cartodb.com/api/v2/sql?q=' + sql);
}


$(".dropdown").on("click", "li", function(event){
    filterYear = $(this).text(); // Get the text of the element
    layerUrl = filterByYear(filterYear);
    console.log(filterYear);

});
