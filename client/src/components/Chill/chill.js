import React from 'react';
import Chill from 'chill.css';
 
function chillZone() {
   text.innerText = 'Breathe In Happiness';
    container.className = 'container grow';

        setTimeout(() => {
            text.innerText = 'Breathe Out Stress!';
            container.className = 'cntainer shrink';
        }, breatheTime)
    
}

setInterval(breathAnimation, totalTime);

export default chillZone();