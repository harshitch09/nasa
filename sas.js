var image1x_ar = new Array();
var image1y_ar = new Array();

function calculate()
{
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img = new Image();
    img = document.getElementById("image2");
    img.crossOrigin = "Anonymous";
    context.drawImage(img, 0, 0);
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    //store values of black pixels
    var i;
    var k=0;
    for(i=0; i<imgData.data.length; i += 20)
    {
        if(imgData.data[i+3] > 0)
        {
            var j=i/4;
            image1y_ar[k] = Math.floor((j/canvas.width));
            image1x_ar[k] = j - (canvas.width*image1y_ar[k]);
            k++;
        }
    }
    document.getElementById("data").innerHTML = "end";
}