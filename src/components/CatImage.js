import React, { useState } from 'react';

const Image = (props) => {

  const [isLoaded, setLoaded] = useState(false);

  return (
    <div className='cat-image'>
      <img src={props.src} onLoad={() => setLoaded(true)} className={isLoaded ? 'loaded' : ''} />
    </div>
  )
  
}

export default Image
