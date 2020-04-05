import { Button, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import orderBy from 'lodash/orderBy';
import toArray from 'lodash/toArray';
import React, { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import { materials, products } from './data';
import { firebaseConfig } from './firebaseConfig';
import { InputWrapper, PageWrapper, Post, PostWrapper, Text } from './styles';

function MakePage() {
  const [product, setProduct] = useState('');
  const [material, setMaterial] = useState('');
  const [posts, setPosts] = useState([]);

  let db = useRef(null);

  useEffect(() => {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    db.current = app.database();
    const posts = db.current.ref('data0/');
    posts.on('value', function (snapshot) {
      setPosts(orderBy(toArray(snapshot.val()), 'createdAt', 'desc'));
    });
  }, []);

  const onSubmit = () => {
    if (product && material) {
      const id = shortid.generate();
      db.current.ref(`data0/${id}`).set(
        {
          type: 'maker',
          id,
          createdAt: Date.now(),
          product,
          material,
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

        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </InputWrapper>
      <PostWrapper>
        {posts
          .filter(({ type }) => type === 'maker')
          .map(({ id, product, material }) => {
            return (
              <Post key={id}>
                <Text>Making</Text>
                <Text>
                  <b>Making:</b> {products.find(({ id }) => id === product).display}
                </Text>
                <Text>
                  <b>Materials:</b> {materials.find(({ id }) => id === material).display}
                </Text>
                <br />
                <Text>Material avaliable:</Text>
                {posts
                  .filter(({ type, material: haveMaterial }) => type === 'have' && material === haveMaterial)
                  .map(({ material, contact }) => (
                    <>
                      <Text>
                        <b>Material:</b> {materials.find(({ id }) => id === material).display}
                      </Text>
                      <Text>
                        <b>Contact:</b> {contact}
                      </Text>
                      <br />
                    </>
                  ))}
                <Text>Product needs:</Text>
                {posts
                  .filter(({ type, product: needProduct }) => type === 'need' && product === needProduct)
                  .map(({ material, contact }) => (
                    <>
                      <Text>
                        <b>Product:</b> {products.find(({ id }) => id === product).display}
                      </Text>
                      <Text>
                        <b>Contact:</b> {contact}
                      </Text>
                      <br />
                    </>
                  ))}
              </Post>
            );
          })}
      </PostWrapper>
    </PageWrapper>
  );
}

export default MakePage;
