import { auto } from 'async'
import React from 'react'
import Quiz from './Quiz'

const App = () => {
  return (
    <div style={styles.quizContainer}>
      <Quiz/>
    </div>
  )
}

export default App

const styles = {
  quizContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}