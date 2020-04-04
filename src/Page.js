import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { Button, TextField } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';

const firebaseConfig = {
  apiKey: 'AIzaSyAPQRD7Iipsy0OQUvCte5D3MgndhxFTO1U',
  authDomain: 'htc20-b45ac.firebaseapp.com',
  databaseURL: 'https://htc20-b45ac.firebaseio.com',
  projectId: 'htc20-b45ac',
  storageBucket: 'htc20-b45ac.appspot.com',
  messagingSenderId: '281002133641',
  appId: '1:281002133641:web:e8aedda99597cc8b105e58',
  measurementId: 'G-JPGQ5ZQCN5',
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 16px;
`;

const InputWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: space-between;
`;

const DataWrapper = styled.div`
  margin-top: 16px;
`

function App() {
  let db = useRef(null);
  const [name, setName] = useState('');
  const [stuff, setStuff] = useState('');
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('test/');
    posts.on('value', function (snapshot) {
      setPosts(toArray(snapshot.val()).reverse());
    });
  }, []);

  const onSubmit = () => {
    if (name && stuff) {
      const id = `test/${shortid.generate()}`;
      db.current.ref(id).set(
        {
          name,
          stuff,
        },
        (e) => console.log(e),
      );
    }
  };
  return (
    <Wrapper>
      <InputWrapper>
        <TextField
          variant="filled"
          id="standard-basic"
          label="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <TextField
          variant="filled"
          id="multiline-basic"
          label="Stuff"
          multiline
          rows="2"
          value={stuff}
          onChange={({ target }) => setStuff(target.value)}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Skicka in!
        </Button>
      </InputWrapper>
      <DataWrapper>
        { posts.length && posts.map(({ name, stuff }) => {
          return <p>{name} - {stuff}</p>
        })}
      </DataWrapper>
    </Wrapper>
  );
}

export default App;
