import React, { useState } from 'react';

const Image = (props) => {

  const [isLoaded, setLoaded] = useState(false);

  return (
    <div className={`cat-image ${isLoaded ? '' : 'loading'}`}>
      <img src={props.src} onLoad={() => setLoaded(true)} />
    </div>
  )
  
}

export default Image
