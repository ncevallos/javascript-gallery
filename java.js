//Images for the gallery are all objects in the imageArray. To add an image to the gallery simply enter the thumb, image, and caption as an object in the array.

var imageArray = [
{
thumb: "IMG_9312-small.JPG",
image: "IMG_9312.JPG",
caption: "Sunrise in the Sky",
},
{
thumb: "IMG_7310-small.JPG",
image: "IMG_7310.JPG",
caption: "Motorcycle in Everglades Sunset",
},
{
thumb: "IMG_0149-small.JPG",
image: "IMG_0149.JPG",
caption: "Sunset on the East Coast",
},
{
thumb: "IMG_3561-small.JPG",
image: "IMG_3561.JPG",
caption: "Shun knife",
}];

  function addThumbImages() {


    for(i=0; i<imageArray.length; i++){

          var thumbDiv = $("<div>");
          thumbDiv.attr("class", "gifImages")
          var imageurl = imageArray[i].thumb;
          var pos = i;
          // Creating and storing an image tag
          var image = $("<img>");
          // Setting the topic image attributes
          image.attr("src", "images/"+imageurl);
          image.attr("class", "gif");
          image.attr("position", pos);
          console.log("in for loop");
          thumbDiv.append(image);
          //note about the gifRating, the hwDemo picture shows the ratings on top of the images, but the instructions say to display the rating under every gif, so I went with the instructions.
          $("#thumbGallery").append(thumbDiv);

        }
    };

    //This function adds the thumb sized images to the bottom of the modal.
  	function addSmallModalImages() {

    	$("#modalThumbs").empty();
    	for(i=0; i<imageArray.length; i++){

          var thumbDiv = $("<div>");
          thumbDiv.attr("class", "gifImages")
          var imageurl = imageArray[i].thumb;
          var pos = i;
          // Creating and storing an image tag
          var image = $("<img>");
          // Setting the topic image attributes
          image.attr("src", "images/"+imageurl);
          image.attr("class", "gif");
          image.attr("position", pos);
          console.log("in for loop");
          thumbDiv.append(image);
          $("#modalThumbs").append(thumbDiv);

        }
    };

    //This function adds the main large image to the modal.
    function addMainImage(pos) {

    	$("#mainImage").empty();
    	$("#caption").empty();
        var position = pos;
          console.log("position is defined as: "+ pos);
          var mainImageDiv = $("<div>");
          mainImageDiv.attr("class", "gifImages")
          var imageurl = imageArray[position].image;
          // Creating and storing an image tag
          var mainImage = $("<img>");
          mainImage.attr("src", "images/"+imageurl);
          mainImage.attr("class", "mainImage");
          mainImageDiv.append(mainImage);


          var caption = imageArray[position].caption;
          var captionDiv = $("<div>").text("Image Caption: "+caption);
          captionDiv.attr("class", "caption")
          console.log("caption information " + caption);
          //below code appends the newly created divs to the page.
          $("#mainImage").append(mainImageDiv);
          $("#caption").append(captionDiv);

    };

//The function below runs the two functions that adds the images to the modal, and then launches the modal. It also first grabs the array position of the object from the position attribute of the image that was clicked so that it displays the appropriate object in the array.
function launchGallery() {
    var pos = $(this).attr("position");
  addSmallModalImages();
  addMainImage(pos);
console.log("launch gallery was run");
        $("#galleryModal").modal();
};

//Below code sets and on"click" listener for all components with the class gif to run launchGallery upon click.
      $(document).on("click", ".gif", launchGallery);

//Below code runs the addThumbImages function when the page is loaded and ready.      
      $(document).ready(function(){

      addThumbImages();


});