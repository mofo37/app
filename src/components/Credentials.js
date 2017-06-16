import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Label = styled.label`
  display: block;
  margin: 1em auto .25em auto;
  width: 75%;
`;

const Input = styled.input`
  display: block;
  width: 75%;
  margin: 0 auto;
  font-size: 1em;
`;

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10% 30%'
};

// const ButtonStyle = styled.button`
//   // background-color: #fff;
//   // display: block;
//   // width: 75%;
//   // margin: 1em auto;
//   // padding-top: 1em;
//   // padding-bottom: 1em;
//   // font-size: 1em;
//   // border-radius: 10px;
// `;

export default function Credentials({ submit, callToAction }) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        
        submit(data);
        e.target.reset();
      }}>
        <Label>Username</Label>
        <Input type="text" name="username" />
        <Label>Password</Label>
        <Input type="password" name="password" />
        <RaisedButton type="submit" style={ButtonStyle}>{callToAction} </RaisedButton>
      </form>
    </div>
  );
}