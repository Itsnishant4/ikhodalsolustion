import React, { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [mockups, setMockups] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        (async () => {
            try {
                setLoading(true); // Set loading to true when fetching begins
                const res = await fetch('http://localhost:5000/data');
                const mres = await fetch('http://localhost:5000/mockup');
                const mockups = await mres.json();
                const data = await res.json();
                setProjects(data.projects);
                setMockups(mockups.mockups);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching completes
            }
        })();
    }, []);

    if (loading) {
        return (
            <section className="featured-projects" id="projects">
                <h2>Featured Projects</h2>
                <div className="project-container">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg class="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>

                    <span class="text-white text-3xl font-bold">Loading...</span>
                    </div>

                </div>
                <section className="animated-mockups">
                    <div className="mockup-container">

                        <div className="mockup">
                            
                        </div>
                    </div>
                </section>
            </section>
        );
    }

    return (
        <section className="featured-projects" id="projects">
            <h2>Featured Projects</h2>
            <div className="project-container">
                {projects.map((i) => (
                    <div className="project" key={i.id}>
                        <div className="thumbnail">
                            <a href={i.url}>
                            <img src={i.imageUrl} alt={i.title} />
                            <div className="overlay">
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <section className="animated-mockups">
                <div className="mockup-container">
                    {mockups.map((i) => (
                        <div className="mockup" key={i.id}>
                            <h3>{i.title}</h3>
                            <img src={i.imageURL} alt={i.title} />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
