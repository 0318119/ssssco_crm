
import { Provider } from 'react-redux';
import store from "./store/index"
import Routing from './Routing/Routing';
function App() {
  return (
    <>
        {/* <Provider store={store}> */}
            <Routing />
        {/* </Provider> */}
    </>
  );
}

export default App;
