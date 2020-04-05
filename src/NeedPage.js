import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';
import React, { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import { firebaseConfig } from './firebaseConfig';
import { PageWrapper, InputWrapper, PostWrapper, Post } from './styles';
import { products } from './data';
import orderBy from 'lodash/orderBy';

function NeedPage() {
  const [product, setProduct] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState([]);

  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('need2/');
    posts.on('value', function (snapshot) {
      setPosts(orderBy(toArray(snapshot.val()), 'createdAt', 'desc'));
    });
  }, []);

  const onSubmit = () => {
    if (product && contact) {
      const id = shortid.generate();
      db.current.ref(`need2/${id}`).set(
        {
          id,
          createdAt: Date.now(),
          product,
          contact,
        },
        (e) => console.log(e),
      );
    }
  };
  return (
    <PageWrapper>
      <InputWrapper>
        <h1>I need products</h1>

        <InputLabel shrink id="materialSelector">
          What products do you need?
        </InputLabel>
        <Select labelId="materialSelector" value={product} onChange={({ target }) => setProduct(target.value)}>
          {products.map(({ id, display }) => (
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
        {posts.map(({ id, product, contact }) => {
          return (
            <Post key={id}>
              <p><b>Product:</b> {products.find(({ id }) => id === product).display}</p>
              <p><b>Contact:</b> {contact}</p>
            </Post>
          );
        })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default NeedPage;
