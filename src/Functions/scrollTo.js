import { animateScroll as scroll} from "react-scroll"


const scrollTo = (direction) => {
   
  
  
    if (direction === "top") {
    scroll.scrollToTop({duration: 1550, smooth: true});
  }else if (direction === "bottom"){
    scroll.scrollToBottom({duration: 3500});
  }else {
    throw new Error("Invalid direction");
  }

};

export default scrollTo;