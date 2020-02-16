import React from 'react';

import JSONTree from '../src';

import data from '../package';

const theme = {
  tree: {
    margin: 0,
    backgroundColor: 'inherit'
  },

  value: {
    paddingTop: 0
  },

  itemRange: {
    paddingTop: 0
  },

  nestedNode: {
    paddingTop: 0
  }
};

const Example = () => {

  // https://github.com/reduxjs/redux-devtools/tree/master/packages/react-json-tree
  return (
    <JSONTree
      data={data}
      hideRoot={true}
      sortObjectKeys={true}
      labelRenderer={([keyPath] /* , nodeType */) => keyPath}
      valueRenderer={(raw, value /* , keyPath */) => {
        // Strip quotes.
        if (raw.length && typeof raw === 'string') {
          return raw.substring(1, raw.length - 1);
        }

        return raw;
      }}
      getItemString={(/* type, data, itemType, itemString */) => {}}
      theme={theme}
    />
  );
};

export default Example;
