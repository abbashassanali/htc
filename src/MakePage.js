import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';
import React, { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import { firebaseConfig } from './firebaseConfig';
import { PageWrapper, InputWrapper, PostWrapper, Post } from './styles';
import { products, materials } from './data';

function MakePage() {
  const [product, setProduct] = useState('');
  const [material, setMaterial] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState([]);

  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('make/');
    posts.on('value', function (snapshot) {
      setPosts(toArray(snapshot.val()).reverse());
    });
  }, []);

  const onSubmit = () => {
    if ((product || material) && contact) {
      const id = `make/${shortid.generate()}`;
      db.current.ref(id).set(
        {
          product,
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
        <h1>I’m a maker</h1>

        <InputLabel shrink id="materialSelector">
          What are you making?
        </InputLabel>
        <Select labelId="materialSelector" value={product} onChange={({ target }) => setProduct(target.value)}>
          {products.map(({ id, display }) => (
            <MenuItem id={id} value={id}>
              {display}
            </MenuItem>
          ))}
        </Select>
        <br />

        <InputLabel shrink id="materialTypeSelector">
          Which materials are you using?
        </InputLabel>
        <Select
          labelId="materialTypeSelector"
          value={material}
          onChange={({ target }) => setMaterial(target.value)}
          displayEmpty
        >
          {materials.map(({ id, display }) => (
            <MenuItem id={id} value={id}>
              {display}
            </MenuItem>
          ))}
        </Select>
        <br />

        <TextField
          variant="filled"
          id="multiline-basic"
          label="Contact information"
          multiline
          value={contact}
          rows={4}
          required
          onChange={({ target }) => setContact(target.value)}
        />
        <br />

        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </InputWrapper>
      <PostWrapper>
        {posts.map(({ product, material, contact }) => {
          return (
            <Post>
              <p>{product}</p>
              <p>{material}</p>
              <p>{contact}</p>
            </Post>
          );
        })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default MakePage;
