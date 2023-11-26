function myFunction(){
    document.getElementById("welcome-bye").innerHTML = "Wish you good luck, thank you for visiting us!"
   }

   var sliderr = document.querySelector('.slider_img');
   var images= ['hourOfCode.jpg', 'hrc.jpg', 'NurayExp.jpg', 'NurlanaExp.jpg', 'RamilExp.jpg', 'TunarExp.jpg', 'unpredictable.jpg', 'cchildren.jpg', 'ccertificate.jpg'];   var i=0;

   function prev(){
   if(i <= 0) i= images.length;
      i--;
      return setImg();
   }
   function next(){
if( i>= images.length - 1) i = -1
i++;
return setImg();
   }
   function setImg(){
    return sliderr.setAttribute('src', 'media/' + images[i]);
   }