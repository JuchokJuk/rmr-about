import "@styles/general.less";
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from '../src/store/rootReducer';

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() { } // defaults to using addon actions integration, can override any method in the router
  })
);

const store = createStore(rootReducer)

export const decorators = [(Story) => <Provider store={store}>                           
                                          <Story/>
                                      </Provider>];

const customViewports = {
  RMR375: {
    name: '375px',
    styles: {
      width: '375px',
      height: '700px'
    },
  },
  RMR768: {
    name: '768px',
    styles: {
      width: '769px',
      height: '700px'

    },
  },
  RMR1024: {
    name: '1024px',
    styles: {
      width: '1025px',
      height: '700px'

    },
  },
  RMR1366: {
    name: '1366px',
    styles: {
      width: '1367px',
      height: '700px'

    },
  },
  RMR1920: {
    name: '1920px +',
    styles: {
      width: '1921px',
      height: '700px'
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
  backgrounds: { 
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'rmr_blue',
        value: '#06163E',
      },
    ],
  }
}