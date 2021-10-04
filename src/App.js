// import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import List from './component/List';
// import Test from './component/Test';
import Products from './component/Products'

function App() {
  // var title="hello";
  return (
   <div className="container-fluid bg-dark">
     {/* <h2>{title}</h2> */}
     {/* <h1>Hello World</h1> */}
       <List />
       <hr/><hr/>
     <Form />
     <hr/><hr/>
   
     <Products />
     {/* <Test /> */}
   </div>
  );
}

export default App;
