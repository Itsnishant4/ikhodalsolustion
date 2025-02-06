import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="footer">
                <section id='footer'>
                <div class="container">
                    <div class="footer-content">
                    <div class="quick-links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="social-media">
                            <h2>Follow Me</h2>
                            <div class="social-icons">
                                <a href="https://www.linkedin.com/in/nishant-patel-295203283/" target="_blank" aria-label="LinkedIn">
                                    <img src="/assets/linkedin.png" alt="LinkedIn"/>
                                </a>
                                <a href="https://github.com/itsnishant4" target="_blank" aria-label="GitHub">
                                    <img src="/assets/github.png" alt="GitHub" className='bg-white rounded-lg scale-75'/>
                                </a>
                                <a href="https://www.instagram.com/nixhant_4/" target="_blank" aria-label="LinkedIn">
                                    <img src="/assets/instagram.png" alt="LinkedIn"/>
                                </a>
                            </div>
                        </div>
                        <div class="footer-info">
                            <h2>Contact Information</h2>
                            <p>Email: <a href="mailto:patelnishant2006@gmail.com">patelnishant2006@gmail.com</a></p>
                            <p>Phone: <a href="tel:+919773005701">+919773005701</a></p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>© 2025 Nishant. All rights reserved.</p>
                    </div>
                </div>
                </section>
            </footer>
        </div>
    )
}
