import React from 'react';
import ModelGrid from '../components/ModelGrid';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="category-section">
        <h2>Featured Models</h2>
        <ModelGrid category="featured" />
      </section>
      
      <section className="category-section">
        <h2>Premium Models</h2>
        <ModelGrid category="premium" />
      </section>
      
      <section className="category-section">
        <h2>Most Viewed</h2>
        <ModelGrid category="most-viewed" />
      </section>
      
      <section className="source-section">
        <h2>XloveCam Models</h2>
        <ModelGrid source="xlovecam" />
      </section>
      
      <section className="source-section">
        <h2>Chaturbate Models</h2>
        <ModelGrid source="chaturbate" />
      </section>
      
      <section className="source-section">
        <h2>Stripchat Models</h2>
        <ModelGrid source="stripchat" />
      </section>
    </div>
  );
};

export default HomePage;
