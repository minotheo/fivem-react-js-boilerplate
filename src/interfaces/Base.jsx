import React, {
  useEffect,
} from 'react';

import Layout
  from "../components/ui/layout/Layout";

import {
  fetchNui,
} from "../utils/nui";

import {
  useSelector,
} from "react-redux";

const Base = () => {
  const {
    isVisible,
  } = useSelector(
    state => state.main,
  );
  useEffect(
    () => {
      if (isVisible) {
        fetchNui(
          'baseReady',
        ).then();
      }
    }, [isVisible],
  );
  if (
    !isVisible
  ) {
    return null;
  }
  return (
    <Layout containerName={"base"}>
      <h1 className="gilroy px20 black">
        Test text
      </h1>
    </Layout>
  );
};

export default Base;