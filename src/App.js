import React from 'react';
import Index from './components/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/reducer/index'

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;