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
import orderBy from 'lodash/orderBy';

function MakePage() {
  const [product, setProduct] = useState('');
  const [material, setMaterial] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState([]);

  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('make2/');
    posts.on('value', function (snapshot) {
      setPosts(orderBy(toArray(snapshot.val()), 'createdAt', 'desc'));
    });
  }, []);

  const onSubmit = () => {
    if (product && material && contact) {
      const id = shortid.generate();
      db.current.ref(`make2/${id}`).set(
        {
          id,
          createdAt: Date.now(),
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
        {posts.map(({ id, product, material, contact }) => {
          return (
            <Post key={id}>
              <p><b>Making:</b> {products.find(({ id }) => id === product).display}</p>
              <p><b>Materials:</b> {materials.find(({ id }) => id === material).display}</p>
              <p><b>Contact:</b> {contact}</p>
            </Post>
          );
        })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default MakePage;
