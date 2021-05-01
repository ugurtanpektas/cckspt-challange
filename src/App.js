import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import Breadcrumb from "./components/Breadcrumb";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <PageHeader/>
      <Breadcrumb />
      <Filter />
      <Products />
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
