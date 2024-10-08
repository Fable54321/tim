import { animateScroll as scroll } from "react-scroll";


const scrollTo = (direction) => {
   
  
  
    if (direction === "top") {
    scroll.scrollTo(-100, {duration: 1550, smooth: true});
  }else if (direction === "bottom"){
    scroll.scrollToBottom({duration: 2000});
  }else {
    throw new Error("Invalid direction");
  }

};

export default scrollTo;