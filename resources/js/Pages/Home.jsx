import React from 'react';
import Navbar from '../Components/Navbar';
import LoaderWithToggle from '@/Components/LoaderWithToggle';
import CoverFlowSlider from '@/components/CoverFlowSlider';
import Card from '@/Components/Card';
import SkillsChart from '@/Components/SkillsChart';
import Timeline from '@/Components/Timline';
import ArtCommissionForm from '@/Components/ArtCommissionForm';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <section id="hero" className="py-16 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-gray-300 text-xl mb-8">Illustrator & Developer Turning Ideas into Code</p>
                <div className="flex justify-center">
                <LoaderWithToggle />
                </div>
            </section>
            <ArtCommissionForm />
            <CoverFlowSlider />
            <section id="products" className="bg-gray-800 p-8 my-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Ecommerce Products</h2>
                <p className="text-gray-300">Check out my product listings below.</p>
            </section>
            <Card />
            <SkillsChart />

            <section id="about" className="bg-gray-800 p-8 my-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300">
                    I am a junior developer with expertise in JavaScript, PHP, VBA, Hubl, HTML, and CSS.
                </p>
            </section>
            <Timeline />

            <section id="gallery" className="bg-gray-800 p-8 my-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <p className="text-gray-300">Here are some of my best illustrations and designs.</p>
            </section>

            

            
            
            <footer className="bg-gray-800 p-4 mt-8">
                <p className="text-gray-400 text-center">
                    © 2025 My Portfolio. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;
