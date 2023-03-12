function upload(){
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    console.log(image);
    image.drawTo(imgcanvas);
  }

  function thisFileUpload(){
    document.getElementById('finput').click();
};