import React from 'react';
import styled from 'styled-components'

const App = styled(({className}) => {
  return (
    <div className={className}>
      <h1>Hello World</h1>
    </div>
  );
})`
  h1{
    color: red;
  }
`

export default App;