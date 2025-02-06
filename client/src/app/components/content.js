import React, { useState, useEffect } from 'react';

export default function Content() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch reviews on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('http://localhost:5000/reviews');
                const data = await res.json();
                setReviews(data.reviews);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []); // Empty dependency array ensures it runs only once

    // Function to handle review submission
    const senddata = () => {
        const name = document.querySelector('.name').value.trim();
        const review = document.querySelector('.reviews').value.trim();

        if (!name || !review) {
            alert('Both name and review are required!');
            return;
        }

        const data = { name, description: review };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error);
                }
                return response.json();
            })
            .then((data) => {
                alert('Review Submitted!');
                window.location.reload();
                document.querySelector('.name').value = '';
                document.querySelector('.reviews').value = '';
                // Refresh reviews without reloading the page
                setReviews((prevReviews) => [...prevReviews, data.review]);
            })
            .catch((error) => {
                alert('Error: ' + error.message);
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div className="container">
                {/* About Section */}
                <section id="about">
                    <div className="intro-snippet">
                        <h1>Hi, I'm Nishant</h1>
                        <p>
                            I'm a passionate web and Android developer with a keen eye for creating seamless user experiences.
                            Whether you're looking for a sleek web interface or a dynamic mobile app, I'm here to bring your ideas
                            to life. 
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills">
                    <div className="skills-preview">
                        <div className="up">
                            <h2>Skills</h2>
                        </div>
                        <div className="down">
                            <div className="skills-icons">
                                <div className="skill">
                                    <img src="/assets/web-development.png" alt="Web Development" />
                                    <p>Web Development</p>
                                </div>
                                <div className="skill">
                                    <img src="/assets/programming.png" alt="Android Development" />
                                    <p>Android Development</p>
                                </div>
                                <div className="skill">
                                    <img src="/assets/marketing.png" alt="Android Development" />
                                    <p>Digital Marketing</p>
                                </div>
                                <div className="skill">
                                    <img src="/assets/software-developer.png" alt="Android Development" />
                                    <p>Ios Developer</p>
                                </div>
                                <div className="skill">
                                    <img src="/assets/app.png" alt="Android Development" />
                                    <p>Cross platform </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>

            </div>
        </div>
    );
}
