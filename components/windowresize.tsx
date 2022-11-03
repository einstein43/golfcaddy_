import React from 'react'
function MyComponent() {
  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    
}

    window.addEventListener('resize', handleResize)
  })
  return 
}