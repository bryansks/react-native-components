import React, { createContext, useRef, useState } from 'react';
import { Animated, Modal } from 'react-native';

export interface ModalDataState {
  visible: boolean;
  transparent: boolean;
  animationType: 'slide' | 'fade' | 'none';
}

export interface ModalState {
  data: ModalDataState;
  props: Object | null;
  component: React.ElementType | null;
}

export const initialState: ModalState = {
  props: null,
  component: null,
  data: {
    visible: false,
    transparent: false,
    animationType: 'slide',
  },
};

type ModalContextProps = {
  hide: () => void;
  state: ModalState;
  top: Animated.Value;
  opacity: Animated.Value;
  chipDeploy: () => void;
  show: (
    component: React.ElementType,
    props?: Object,
    data?: ModalDataState
  ) => void;
};

export const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, setState] = useState<ModalState>(initialState);
  const top = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const { animationType } = state.data;

  const hide = () =>
    setState({
      props: {},
      component: null,
      data: {
        visible: false,
        transparent: false,
        animationType: animationType,
      },
    });

  const show = (
    component: React.ElementType,
    props: Object = {},
    data: ModalDataState = {
      visible: true,
      transparent: false,
      animationType: 'slide',
    }
  ): void => {
    setState({ props, component, data });
  };

  const chipDeploy = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(top, {
      toValue: 60,
      duration: 500,
      useNativeDriver: true,
    }).start(() =>
      setTimeout(() => {
        top.setValue(1), opacity.setValue(0);
      }, 2000)
    );
  };

  return (
    <ModalContext.Provider
      value={{ state, top, opacity, hide, show, chipDeploy }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const ModalConsumer: React.FC = () => {
  const render = (
    Component: React.ElementType<any> | null,
    props: Object | null
  ): JSX.Element | null => {
    if (Component) return <Component {...props} />;
    return null;
  };

  return (
    <ModalContext.Consumer>
      {({
        state: {
          props,
          component: Component,
          data: { visible, transparent, animationType },
        },
      }) => (
        <Modal
          visible={visible}
          animationType={animationType}
          transparent={transparent}
        >
          {render(Component, props)}
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

export default { ModalProvider, ModalConsumer };
