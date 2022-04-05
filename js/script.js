var maximages = 5;
//Folder name and start of file name of each image file. 
var startpath = "pix3/birds"
//Filename extension of each image.
var extension = ".png"

function calcslide(x) {
    //Get file name of image that's showing.
    var currentimage = document.getElementById('bigpic').src;
    //Locate file name extension in current image source string.
    var dotat = currentimage.indexOf(extension);
    //Grab two digits to the left of that file name extension.
    var stringnumber = currentimage.substr(dotat - 2, 2);
    console.log(stringnumber)
    //Convert stringnumber string to number and add x.
    var nextnum = parseInt(stringnumber) + x;
    //If nextnum is less than 1, wrap around to maximages.
    if (nextnum < 1) {
        nextnum = maximages;
    }
    //If nextnum is greater than maximages, wrap around to 1.
    if (nextnum > maximages) {
        nextnum = 1;
    }
    //Create two-digit string from number (leading zero if less than 10).
    var twodigitnum = ('0' + nextnum).slice(-2);
    //Create new file name from two-digit number string.
    var showimg = startpath + twodigitnum + extension;
    showbig(showimg);
}

//Show clicked image in the large img tag 
function showbig(pic) {
    document.getElementById("bigpic").src = pic;


}