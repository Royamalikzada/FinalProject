import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function NoPage() {
    return (
        <div>
            <Header/>
            The page is not found!
            Error: 404
            <Footer />
        </div>
    )
}