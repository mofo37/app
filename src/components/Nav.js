import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Headroom from 'react-headroom';

const Div = styled.div`
  background: lightgrey;
  padding: 1em;
  font-size: 1.25em;
  font-weight: bold;
`;

function Nav (props) {

  return (
    <Headroom>
      <Div className="App-header">
        <h2>Tableau</h2>
        <Header />
      </Div>
    </Headroom>
  );
}

export default Nav;