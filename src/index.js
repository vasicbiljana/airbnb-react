import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import dataCard from "./data/dataCard"

import reportWebVitals from './reportWebVitals';


function HomePage() {

    const cards = dataCard.map(item => {
        return (
            <Card
                key={item.id}
                // ili {...item} i svi item mora se pobrisati u Card.js
                item={item}
            />
        ) 
    })        
    
    return (
        <div>
            <Nav />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )


  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
