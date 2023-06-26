import React, { createContext, useEffect, useReducer, useState } from 'react';

import axios from 'axios';

import { NpsServReducer, NpsState } from './NpsServReducer';

import type { Data } from '../../../components/sheets/NpsSheetManager';

type NpsServContextProps = {
  data: Data[];
  dataStatus: string;
  loginStatus: string;
  login: () => void;
  getSurveys: () => void;
  postNpsSurveys: (response: any) => void;
};

export const initialState: NpsState = {
  data: [],
  dataStatus: 'initial',
  loginStatus: 'unLogged',
};

export const NpsServContext = createContext({} as NpsServContextProps);

export const NpsServProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(NpsServReducer, initialState);
  const [token, setToken] = useState<string>('');

  const instance = axios.create({
    baseURL: 'https://',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const getSurveys = async () => {
    try {
      await instance
        .get('7', {
          params: {
            reference: '0001',
          },
        })
        .then((response) => {
          console.log(response.data);
          dispatch({
            type: 'saveData',
            payload: response.data.data,
          });
          return;
        });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const postNpsSurveys = async (response: any) => {
    try {
      await axios
        .post('https://', response, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const login = async () => {
    try {
      dispatch({
        type: 'onLogingStatus',
        payload: 'checking',
      });
      await axios
        .post('https://', {
          username: 'userName',
          password: 'P@ssw0rd',
        })
        .then((response) => {
          setToken(response.data.accessToken);
          dispatch({
            type: 'isLogged',
          });
          dispatch({
            type: 'onLogingStatus',
            payload: 'logged',
          });
        });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    if (token === '') return;
    getSurveys();
  }, [token]);

  return (
    <NpsServContext.Provider
      value={{
        ...state,
        login,
        getSurveys,
        postNpsSurveys,
      }}
    >
      {children}
    </NpsServContext.Provider>
  );
};
