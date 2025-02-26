import React from 'react';
import Navbar from '../Components/Navbar';
import LoaderWithToggle from '@/Components/LoaderWithToggle';
import CoverFlowSlider from '@/Components/CoverFlowSlider';
import Card from '@/Components/Card';
import SkillsChart from '@/Components/SkillsChart';
import Timeline from '@/Components/Timline';
import ArtCommissionForm from '@/Components/ArtCommissionForm';
import CircularGallery from '@/Components/CircularGallery';
import SocialMedia from '@/Components/SocialMedia';


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
            <section id="about" className="bg-gray-800 p-8 my-8 rounded-lg transform hover:scale-[1.01] transition-all duration-300">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Art Meets Code
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Beyond coding, I'm passionate about digital illustration and traditional art. 
                        My journey in tech is complemented by my love for creating visual stories through drawings.
                    </p>
                    <div className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
                        <svg 
                            className="w-5 h-5 animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                        <span>Explore my artwork in the gallery below</span>
                    </div>
                </div>
            </section>
            
            <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>
            <ArtCommissionForm />
            {/* <CoverFlowSlider /> */}
            <section id="tech-stack" className="bg-gray-800 p-12 my-8 rounded-lg text-center relative group cursor-pointer hover:bg-gray-700 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-2 text-white">Experienced Technology Stack</h2>
                <svg 
                    className="w-6 h-6 mx-auto mt-4 text-gray-400 animate-bounce group-hover:text-blue-500 transition-colors duration-300" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </section>
            <Card />
            <SkillsChart />

            {/* <section id="about" className="bg-gray-800 p-8 my-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300">
                    I am a junior developer with expertise in JavaScript, PHP, VBA, Hubl, HTML, and CSS.
                </p>
            </section> */}
            <Timeline />
            <SocialMedia />           
            <footer className="bg-gray-800 p-4 mt-8">
                <p className="text-gray-400 text-center">
                    © 2025 Ali's Portfolio. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;
