import React, {
  useCallback, useEffect,
} from 'react';

import Layout
  from "../components/ui/layout/Layout";

import {
  fetchNui,
} from "../utils/nui";

import {
  useEscHook,
} from "../hooks/useEscHook";

import {
  useNuiEvent,
} from "../hooks/useNuiEvent";

import {
  mainActions,
} from "../store/reducers/mainSlice";

import {
  useDispatch, useSelector,
} from "react-redux";

const Base = () => {
  const dispatch = useDispatch();
  const {
    isVisible,
  } = useSelector(
    state => state.main,
  );
  const onCloseMenu = useCallback(
    () => {
      if (
        !isVisible
      ) {
        return;
      }
      fetchNui('baseClose').then();
    }, [isVisible],
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
        fetchNui('baseReady').then();
      }
    }, [isVisible],
  );
  useEscHook(
    onCloseMenu,
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