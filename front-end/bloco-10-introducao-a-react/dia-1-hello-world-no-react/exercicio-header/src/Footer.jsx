import React from 'react';

const tick = () => {
  const element = (
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
  );
  return element;
}

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
              <h1>E isso é só o começo...</h1>
              {tick()}
            </footer>
          )
        }
      }
      
      setInterval(tick, 1000);
      export default Footer;
      