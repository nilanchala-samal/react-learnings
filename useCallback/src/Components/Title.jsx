import React from 'react'

function Title() {
    console.log('Rendering Title')
  return (
    <div>
        <h2>useCallback() hook</h2>
    </div>
  )
}

export default React.memo(Title)