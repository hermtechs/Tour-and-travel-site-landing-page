const scrollRightBtn = document.querySelector('.scroll-right')
const scrollLeftBtn = document.querySelector('.scroll-left')
const destinationContainer = document.querySelector('.places')
const destinations  = document.querySelectorAll('.place');

scrollRightBtn.addEventListener('click', scrollRight);
scrollLeftBtn.addEventListener('click',scrollLeft)
const elementSize = destinations[0].clientWidth
console.log(elementSize)


//FINDING TOTAL WIDTH COVERED BY PLACE ELEMENTS 
var totalClientWidth = 0
const totalElementsClientWidth = destinations.forEach((destination)=>{
totalClientWidth = totalClientWidth + destination.clientWidth;
})
console.log(totalClientWidth);

let unscrolledWidth = totalClientWidth
function scrollRight(){

    unscrolledWidth-=elementSize;

    if(unscrolledWidth>=0){ 
      destinationContainer.scrollLeft+=elementSize;
    }
    else{
        destinationContainer.scrollLeft -= totalClientWidth-elementSize; 
        // console.log('yeah')
        unscrolledWidth = totalClientWidth;
    }
  
  }

  function scrollLeft(){
     destinationContainer.scrollLeft-=elementSize;
  }

//auto scrolling every 3 secons
const autoScroll = (t)=>{
    setInterval(scrollRight,t)
}
autoScroll(2500);