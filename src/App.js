/* eslint-disable linebreak-style */
/* eslint-disable  */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Calculator from "./components/calculator";
import Quote from "./components/Quote";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div className="app">
              <NavBar />
              <h2 className="second-heading">Welcome to our page</h2>
              <p className="app-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue enim, consectetur ut dui eu, tempus auctor
                nisi. Cras cursus erat ac massa viverra pharetra. Donec ornare
                nisl purus, pellentesque dignissim nunc euismod et. Fusce 
                ullamcorper elit iaculis interdum pharetra. Fusce ornare odio
                nec massa pharetra sollicitudin. Nullam fermentum ipsum nec 
                ligula lobortis, in laoreet sapien commodo. Proin placerat
                vulputate tellus, cursus vulputate odio porta non .  Vivamus in 
                erat quis justo gravida euismod ac nec nisl. Sed in lacus est.
                Cras condimentum erat arcu, sit amet finibus arcu ultricies ac. 
                Nam congue risus sit amet est placerat laoreet. In vitae sapien
                mollis, malesuada dui quis, auctor erat. Sed leo sapien, 
                scelerisque eu quam eget, malesuada scelerisque quam. Nam felis
                mi, tincidunt ut posuere sed, fermentum sit amet sapien. Etiam 
                auctor quam nec tellus rhoncus, ac imperdiet dui mattis. Etiam
                cursus maximus bibendum. Vivamus id odio vel dolor tempus 
                dignissim. Curabitur fringilla vestibulum ante eu consectetur.
                Quisque at feugiat turpis.
              </p>
              </div>
            </>
          }
        />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);

export default App;
