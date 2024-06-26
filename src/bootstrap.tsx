import { Provider } from 'react-redux'
import App from './App'
import ReactDOM from 'react-dom/client'
import { store } from './app/appStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
