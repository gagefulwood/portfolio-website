import React from 'react';
import Card from './components/card';

export default function About() {
    return (
        <section id="about" className="min-h-screen bg-soft-periwinkle p-6 shadow-lg">
            <header className="mb-6 text-center">
                <h2 className="text-5xl font-semibold">ABOUT</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-3xl text-center font-bold mb-4">Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card title="C++" description="TemporaryDesc" bgColor="bg-deep-indigo"/>
                        <Card title="Python" description="TemporaryDesc" bgColor="bg-light-pink-blush"/>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl text-center font-bold mb-4">Interests</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card title="Tennis" description="None" bgColor="bg-vivid-lavender"/>
                        <Card title="Rainbow Six Siege" description="None" bgColor="bg-soft-pink"/>
                    </div>
                </div>
            </div>
            
        </section>
    );
}