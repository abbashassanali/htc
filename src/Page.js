import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';
import React, { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { firebaseConfig } from './firebaseConfig';
import { PageWrapper } from './styles';

const InputWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: space-between;
  margin: 0 auto;
`;

const PostWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Post = styled.div`
  border: 1px solid white;
  max-width: 300px;
  min-width: 300px;
  margin: 8px;
  padding: 8px;
`;

function Page() {
  const [type, setType] = useState('');
  const [material, setMaterial] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState([]);
  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('have2/');
    posts.on('value', function (snapshot) {
      setPosts(toArray(snapshot.val()).reverse());
    });
  }, []);

  const onSubmit = () => {
    if (type && material && contact) {
      const id = `have2/${shortid.generate()}`;
      db.current.ref(id).set(
        {
          type,
          material,
          contact,
        },
        (e) => console.log(e),
      );
    }
  };
  return (
    <PageWrapper>
      <InputWrapper>
        <h1>Do you have raw material or products?</h1>
        <InputLabel shrink id="materialSelector">
          Material / Products
        </InputLabel>
        <Select labelId="materialSelector" value={type} onChange={({ target }) => setType(target.value)} displayEmpty>
          <MenuItem value="material">Material</MenuItem>
          <MenuItem value="products">Products</MenuItem>
        </Select>
        <br />

        {type === 'material' && (
          <>
            <InputLabel shrink id="materialTypeSelector">
              Which material?
            </InputLabel>
            <Select
              labelId="materialTypeSelector"
              value={material}
              onChange={({ target }) => setMaterial(target.value)}
              displayEmpty
            >
              <MenuItem value="plastic">Plastic</MenuItem>
            </Select>
          </>
        )}
        {type === 'products' && (
          <>
            <InputLabel shrink id="productTypeSelector">
              Which product?
            </InputLabel>
            <Select
              labelId="productTypeSelector"
              value={material}
              onChange={({ target }) => setMaterial(target.value)}
              displayEmpty
            >
              <MenuItem value="munskydd">Munskydd</MenuItem>
              <MenuItem value="visir">Visir</MenuItem>
              <MenuItem value="handsprit">Handsprit</MenuItem>
            </Select>
          </>
        )}
        <br />
        {type && (
          <TextField
            variant="filled"
            id="multiline-basic"
            label="Kontaktuppgifter"
            multiline
            value={contact}
            rows={4}
            onChange={({ target }) => setContact(target.value)}
          />
        )}
        <br />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Skicka in!
        </Button>
      </InputWrapper>
      <PostWrapper>
        {posts.map(({ type, material, contact }) => {
          return (
            <Post>
              <p>{type}</p>
              <p>{material}</p>
              <p>{contact}</p>
            </Post>
          );
        })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default Page;
