let container = document.createElement("div");
    container.setAttribute("class","container");
    
let image = document.createElement("img");
    image.setAttribute("class","img");
    

let previous_btn = document.createElement('button');
    previous_btn.innerText = "Previous"
    previous_btn.setAttribute("class","btn");
    previous_btn.addEventListener("click",pre);

let next_btn = document.createElement("button");
    next_btn.innerText = "Next"
    next_btn.setAttribute("class","btn");
    next_btn.addEventListener("click",next);
    
    
    document.body.append(container);
    container.append(image);
    container.append(next_btn);
    container.append(previous_btn);

let count = 0;

let image_arr = ["img1","img2","img3","img4","img5","img6","img7","img8"];


function next(){
    if(count < image_arr.length-1)
    {
        image.src = image_arr[count]+'.jpeg'
        count ++ 
    }
}

function pre(){
    if(count!=0)
    {
        count--
        image.src = image_arr[count]+'.jpeg'
    }
}



