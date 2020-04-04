import { Button, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';
import React, { useEffect, useState, useRef } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { firebaseConfig } from './firebaseConfig';
import { PageWrapper } from './styles';

const InputWrapper = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: space-between;
  margin: 0 auto;
`;

const PostWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Post = styled.div`
  border: 1px solid white;
  max-width: 400px;
  width: 200px;
  margin: 0 8px;
`;

function Page() {
  const [material, setMaterial] = useState('');
  const [location, setLocation] = useState('');
  const [transport, setTransport] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState('');
  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('have/');
    posts.on('value', function (snapshot) {
      setPosts(toArray(snapshot.val()).reverse());
    });
  }, []);

  const onSubmit = () => {
    if (material && location && transport && contact) {
      const id = `have/${shortid.generate()}`;
      db.current.ref(id).set(
        {
          material,
          location,
          transport,
          contact,
        },
        (e) => console.log(e),
      );
    }
  };
  return (
    <PageWrapper>
      <InputWrapper>
        <h1>Jag har material</h1>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Vilket material/produkt har jag
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={material}
          onChange={({ target }) => setMaterial(target.value)}
          displayEmpty
        >
          <MenuItem value="cat">Katt</MenuItem>
          <MenuItem value="twoCats">Två katter</MenuItem>
          <MenuItem value="threeCats">Tre katter</MenuItem>
          <MenuItem value="dog">En hund 🙀</MenuItem>
        </Select>
        <TextField
          variant="filled"
          id="multiline-basic"
          label="Var finns materialet"
          multiline
          value={location}
          onChange={({ target }) => setLocation(target.value)}
        />
        <TextField
          variant="filled"
          id="multiline-basic"
          label="Kan vi transportera eller för upphämtning?"
          multiline
          value={transport}
          onChange={({ target }) => setTransport(target.value)}
        />
        <TextField
          variant="filled"
          id="multiline-basic"
          label="Kontaktuppgifter"
          multiline
          value={contact}
          onChange={({ target }) => setContact(target.value)}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Skicka in!
        </Button>
      </InputWrapper>
      <PostWrapper>
        {posts.length &&
          posts.map(({ material, location, transport, contact }) => {
            return (
              <Post>
                <p>{material}</p>
                <p>{location}</p>
                <p>{transport}</p>
                <p>{contact}</p>
              </Post>
            );
          })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default Page;
