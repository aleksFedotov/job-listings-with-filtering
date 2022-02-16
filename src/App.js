import { Fragment } from 'react/cjs/react.production.min';

import GlobalStyles from '../src/styles/GlobalStyles';
import Hero from './components/hero/Hero';
import Jobs from './components/jobs/JobsList';
import Filter from './components/filter/Filter';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Filter />
      <Hero />
      <Jobs />
    </Fragment>
  );
}

export default App;
