import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import toArray from 'lodash/toArray';
import orderBy from 'lodash/orderBy';
import React, { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import { firebaseConfig } from './firebaseConfig';
import { PageWrapper, InputWrapper, PostWrapper, Post } from './styles';
import { products, materials } from './data';

function HavePage() {
  const [type, setType] = useState('');
  const [product, setProduct] = useState('');
  const [material, setMaterial] = useState('');
  const [contact, setContact] = useState('');
  const [posts, setPosts] = useState([]);
  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('have5/');
    posts.on('value', function (snapshot) {
      setPosts(orderBy(toArray(snapshot.val()), 'createdAt', 'desc'));
    });
  }, []);

  const onSubmit = () => {
    if ((material || product) && contact) {
      const id = shortid.generate();
      db.current.ref(`have5/${id}`).set(
        {
          id,
          material,
          product,
          contact,
          createdAt: Date.now(),
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
        <Select labelId="materialSelector" value={type} onChange={({ target }) => {
          setType(target.value);
          setMaterial('')
          setProduct('')
        }}
        >
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
              {materials.map(({ id, display }) => (
                <MenuItem id={id} value={id}>
                  {display}
                </MenuItem>
              ))}
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
              value={product}
              onChange={({ target }) => setProduct(target.value)}
              displayEmpty
            >
              {products.map(({ id, display }) => (
                <MenuItem id={id} value={id}>
                  {display}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
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
        {posts.map(({ id, material, product, contact }) => {
          return (
            <Post key={id}>
              { material && <p><b>Material:</b> {materials.find(({ id }) => id === material).display}</p>}
              { product && <p><b>Product:</b> {products.find(({ id }) => id === product).display}</p>}
              <p><b>Contact:</b> {contact}</p>
            </Post>
          );
        })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default HavePage;
