import { animateScroll as scroll} from "react-scroll"


const scrollTo = (direction) => {
    const options = {
        duration: 3500,
      };
  
  
    if (direction === "top") {
    
    scroll.scrollToTop(options);
  }else if (direction === "bottom"){
    scroll.scrollToBottom(options);
  }else {
    throw new Error("Invalid direction");
  }

};

export default scrollTo;