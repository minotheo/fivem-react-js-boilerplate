import React, {
  useEffect,
} from 'react';

import Layout
  from "../components/ui/layout/Layout";

import {
  fetchNui,
} from "../utils/nui";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useNuiEvent,
} from "../hooks/useNuiEvent";

import {
  mainActions,
} from "../store/reducers/mainSlice";

const Base = () => {
  const dispatch = useDispatch();
  const {
    isVisible,
  } = useSelector(
    state => state.main,
  );
  useNuiEvent(
    'setBaseVisible', (state) => {
      dispatch(
        mainActions.setIsVisible(state),
      );
    },
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