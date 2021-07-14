import './App.css';
import InitialPage from './components/initialPage/initialPage';
import Layout from './components/Layout/Layout';




function App() {

  return (
    <div className="App">
      <Layout>
        <InitialPage />
      </Layout>
    </div>
  );
}

export default App;
