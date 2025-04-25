import React from 'react';

function App() {
  return React.createElement(
    'div',
    { style: { textAlign: 'center', backgroundColor: 'rgb(255, 182, 193)' } },
    React.createElement(
      'a',
      {
        href: '2eme.html',
        style: { display: 'block', fontSize: '24px', marginTop: '20%', color: 'rgb(0, 174, 255)' }
      },
      'Safae mi amor'
    ),
    React.createElement(
      'div',
      { style: { fontSize: '48px', marginTop: '10px' } },
      '🥰😍❤️‍🩹🥺'
    )
  );
}

export default App;
