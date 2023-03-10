import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  console.log("main app");
  return (
    <Fragment>
      <Header />
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;