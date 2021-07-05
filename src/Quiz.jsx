import React from 'react';

const Quiz = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.question}>Hello Boi</h1>
      </div>
      <div style={styles.container}>
        <button>One</button>
        <button>Two</button>
      </div>
    </>
  );
};

export default Quiz;

const styles = {
  question: {
    fontSize: '22px',
    color: 'blue',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
