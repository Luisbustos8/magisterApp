import './App.css';
import Enrrollment from './components/enrrollment/enrrollment';

import InitialPage from './components/initialPage/initialPage';
import Layout from './components/Layout/Layout';




function App() {

  return (
    <div className="App">
      <Layout>
        {/* <InitialPage /> */}
        {/* <Phases /> */}
        <Enrrollment />
      </Layout>
    </div>
  );
}

export default App;
