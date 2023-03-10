import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
function App() {
  const show=true
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
      <Meals />
     {show&& <Modal />}
      </main>
    </Fragment>
  );
}

export default App;