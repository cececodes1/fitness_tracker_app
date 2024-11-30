import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome to the Fitness Tracker App</h1>
      <p className="lead">Track your exercises and stay fit!</p>
      <img src="./images/pexels-cottonbro-5081914.jpg" alt="Fitness" className="img-fluid rounded" />
    </div>
  );
};

export default Home;