import { Provider } from 'mobx-react'
import store from './store'
import Todo from './pages/todo'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
