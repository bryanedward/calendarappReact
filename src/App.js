import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './Routers/AppRouter'
import { store } from './store/store'

export function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}