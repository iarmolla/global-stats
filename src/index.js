import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import rootSaga from './sagas'
import rootMiddleware from './middlewares'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devtools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)
sagaMiddleware.run(rootMiddleware)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
