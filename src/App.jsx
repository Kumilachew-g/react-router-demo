// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; // Import the AppRoutes component correctly

function App() {
  return (
    <Router>
      <div>
        <AppRoutes /> {/* Use AppRoutes here */}
      </div>
    </Router>
  );
}

export default App;
