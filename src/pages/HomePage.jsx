import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <div className="home-page">
        <header className="hero">
          <h1>Welcome to XxxCams.org</h1>
          <p>Explore the hottest live cams and models</p>
          <button>Join Now</button>
        </header>
        <section className="featured-models">
          <h2>Featured Models</h2>
          {/* Render featured models here */}
        </section>
        <section className="popular-categories">
          <h2>Popular Categories</h2>
          {/* Render popular categories here */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
