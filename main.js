var canvasBody = document.getElementById("canvas"),
    canvas     = canvasBody.getContext("2d"),
    w          = canvasBody.width= window.innerWidth,
    h          = canvasBody.height= window.innerHeight;

    
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }
    
      let color = ['red','green','yellow','blue'];
      

    function move(){
        canvas.clearRect(0,0,w,h);
        
        for(let i=0; i<1000;i++){        
        canvas.beginPath()
        x = getRandom(1,w)
        y = getRandom(1,h)
        r = getRandom(1,10)
        let cl=color[Math.floor(Math.random() * (color.length))];
        
        canvas.fillStyle=('[0]',cl)
        canvas.arc(x,y,r,0,2*Math.PI,false);
        
        canvas.fill();
        canvas.stroke();

        

    }}

    setInterval(move,250);

