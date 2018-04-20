var imgcanvas = null;
var fileinput = null;
var resetimg = null;

var imgon = null;

var doitsi = null;


function uplode()
{
    imgcanvas = document.getElementById("can");
    fileinput = document.getElementById("finput");
    
    resetimg = fileinput;
    
   
    
    var image = new SimpleImage(fileinput);
    
     imgon = image;
    
    // we creat the new object beacuse if we not do like this then doitsi will alse point to the imgon
      doitsi = new SimpleImage(fileinput);
    
    image.drawTo(imgcanvas);
}

function cleeear()
{
    if(fileinput!=null)
        {
    var x = confirm("do you want to clear this image");
    if(x==1)
    {
    var ctx = imgcanvas.getContext("2d");
    ctx.clearRect(0,0,imgcanvas.width,imgcanvas.height);
    fileinput.value = null;
    }
        }
}

function reset()
{
    if(resetimg!=null)
        {
            var image = new SimpleImage(resetimg);
             imgon = image;
            image.drawTo(imgcanvas);
             var sizeinput = document.getElementById("sldrred");
            sizeinput.value = 0;
             var sizeinput1 = document.getElementById("sldrgrey");
            sizeinput1.value = 0;
        }
}

function dored()
{
    var sizeinput = document.getElementById("sldrred");
    
    if(imgon!=null){
        
    for(var pixel of imgon.values())
        {       
            var x = pixel.getX();
            var y = pixel.getY();
           
            var ppixel = doitsi.getPixel(x,y);
           
            var redi = 255 - ppixel.getRed();
            
            var redii = (sizeinput.value*redi)/100;
            
            pixel.setRed(ppixel.getRed()+redii);
        }
        
        var ctx = imgcanvas.getContext("2d");
        ctx.clearRect(0,0,imgcanvas.width,imgcanvas.height);
        
        imgon.drawTo(imgcanvas);
    }
}

function dogrey()
{
    var si = document.getElementById("sldrgrey").value;
    
    if(imgon!=null)
        {
            for(var pixel of imgon.values())
                {
                    var x = pixel.getX();
                    var y = pixel.getY();
                    var ppixel = doitsi.getPixel(x,y);
                    var mean = (ppixel.getRed() + ppixel.getBlue() + ppixel.getGreen())/3;
                    
                    var r = (mean - ppixel.getRed())*si/100;
                    var g = (mean - ppixel.getGreen())*si/100;
                    var b = (mean - ppixel.getBlue())*si/100;
                    
                    r = ppixel.getRed() + r;
                    g = ppixel.getGreen() + g;
                     b = ppixel.getBlue() + b;
                    
                    pixel.setRed(r);
                    pixel.setBlue(b);
                    pixel.setGreen(g);
                }     
            
        var ctx = imgcanvas.getContext("2d");
        ctx.clearRect(0,0,imgcanvas.width,imgcanvas.height);            
            imgon.drawTo(imgcanvas);
                
        }
}



function dorain()
{
    var si = document.getElementById("sldrrain").value;
    
    if(imgon!=null)
        {
            red      =   imgon.getHeight()/7;
            
            orange = 2*imgon.getHeight()/7;
            
            yellow = 3*imgon.getHeight()/7;
            
            green = 4*imgon.getHeight()/7;
            
            blue = 5*imgon.getHeight()/7;
            
            indigo = 6*imgon.getHeight()/7;
            
            violet = 7*imgon.getHeight()/7;
            for(var pixel of imgon.values())
                {
                    var ppixel = doitsi.getPixel(pixel.getX(),pixel.getY());
                    var avg = (ppixel.getRed() + ppixel.getBlue() + ppixel.getGreen())/3;
                    avg = avg + avg*si/100;
                    if(pixel.getY()<=red)
                        {
                            if(avg<128)
                               { 
                                   pixel.setRed(2*avg);
                                   pixel.setBlue(0);
                                   pixel.setGreen(0);
                               }
                            else 
                                {
                                    pixel.setRed(255);
                                   pixel.setBlue(2*avg-255);
                                   pixel.setGreen(2*avg-255);
                                }
                        }
                    else if(pixel.getY()<=orange)
                        {
                             if(avg<128)
                               { 
                                  
                                   pixel.setRed(2*avg);
                                   pixel.setBlue(0.8*avg);
                                   pixel.setGreen(0);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(255);
                                   pixel.setBlue(1.2*avg-51);
                                   pixel.setGreen(2*avg-255);
                                }
                        }
                      else if(pixel.getY()<=yellow)
                        {
                             if(avg<128)
                               { 
                                   
                                   pixel.setRed(2*avg);
                                   pixel.setBlue(2*avg);
                                   pixel.setGreen(0);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(255);
                                   pixel.setBlue(255);
                                   pixel.setGreen(2*avg-255);
                                }
                        }
                      else if(pixel.getY()<=green)
                        {
                            if(avg<128)
                               { 
                                  
                                   pixel.setRed(0);
                                   pixel.setBlue(2*avg);
                                   pixel.setGreen(0);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(2*avg-255);
                                   pixel.setBlue(255);
                                   pixel.setGreen(2*avg-255);
                                }
                        }
                      else if(pixel.getY()<=blue)
                        {
                             if(avg<128)
                               { 
                                  
                                   pixel.setRed(0);
                                   pixel.setBlue(0);
                                   pixel.setGreen(2*avg);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(2*avg-255);
                                   pixel.setBlue(2*avg-255);
                                   pixel.setGreen(255);
                                }
                        }
                      else if(pixel.getY()<=indigo)
                        {
                             if(avg<128)
                               { 
                                   
                                   pixel.setRed(0.8*avg);
                                   pixel.setBlue(0);
                                   pixel.setGreen(2*avg);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(1.2*avg-51);
                                   pixel.setBlue(2*avg-255);
                                   pixel.setGreen(255);
                                }
                        }
                      else if(pixel.getY()<=violet)
                        {
                             if(avg<128)
                               { 
                                   
                                   pixel.setRed(1.6*avg);
                                   pixel.setBlue(0);
                                   pixel.setGreen(1.6*avg);
                               }
                            else 
                                {
                                    
                                   pixel.setRed(0.4*avg+153);
                                   pixel.setBlue(2*avg-255);
                                   pixel.setGreen(0.4*avg+153);
                                }
                        }
                }
            imgon.drawTo(imgcanvas);
        }
}




function doblur()
{
    var sizein = document.getElementById("sldrblur").value;
    sizein = sizein/100;
    if(imgon!=null)
        {
            for(var pixel of imgon.values())
                {
                    var ran = Math.random();
                    if(ran<sizein)
                        {
                            //do blur;
                             var x = (pixel.getX()+3<imgon.Width)?(3):(imgon.Width-pixel.getX()+3);
                             var ppixel = doitsi.getPixel(pixel.getX()+x,pixel.getY())
                             imgon.setPixel(pixel.getX(),pixel.getY(),ppixel);
                        }
                    else
                        {
                            var ppixel = doitsi.getPixel(pixel.getX(),pixel.getY());
                            imgon.setPixel(pixel.getX(),pixel.getY(),ppixel);
                        }
                }
            
            imgon.drawTo(imgcanvas);
        }
}












