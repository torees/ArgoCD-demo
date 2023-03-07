import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="dashboard">
        <h1>GitOps og ArgoCD for Toll v1</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
