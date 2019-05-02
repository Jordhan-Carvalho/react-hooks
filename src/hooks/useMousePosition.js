import { useState, useEffect } from 'react';

//Setup state to track x and y position (useState)
//Setup event to listen for mouse movement
//Remove event listener if unmounted (useEffect)

const useMousePosition = () => {
    // the only time where you can use objs (when both changes at the same time)
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = e => {
        setPosition({ x: e.pageX, y: e.pageY });
      };
  
      document.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return position;
  };

  export default useMousePosition

