import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MyComponent = () => {

  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='App'>
      <h1 style={{  margin: 'auto 0', fontWeight: 'normal' }}>
        
        <span style={{ color: 'blue.400', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Web Developer',""]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
  }
  export default MyComponent