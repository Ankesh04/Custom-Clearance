import React from 'react';
import './LandingPage.css';

// --- Helper Components for SVGs (to keep the main component clean) ---

const Logo = () => (
    <div className="logo">
        <div className="logo-icon-wrapper">
            <span className="logo-icon-text">C</span>
        </div>
        <span className="logo-text">Custom Clearance</span>
    </div>
);

const StarIcon = ({ className = "star-icon" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.365-2.446a1 1 0 00-1.175 0l-3.365 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.34 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z" />
    </svg>
);

// --- Main Landing Page Component ---

export const LandingPage = ({ onNavigateToLogin }) => {
    return (
        <div className="page-wrapper">
            {/* --- Header --- */}
            <header className="site-header">
                <div className="header-container">
                    <a href="#" aria-label="Home">
                        <Logo />
                    </a>
                    <nav className="header-nav">
                        <a href="#how-it-works">How it Works</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#countries">Countries</a>
                        <a href="#features">Features</a>
                    </nav>
                    <div className="header-actions">
                        <button className="btn-ghost desktop-only" onClick={onNavigateToLogin}>Login</button>
                        <button className="btn-accent" onClick={onNavigateToLogin}>Get Started</button>
                    </div>
                </div>
            </header>

            <main>
                {/* --- Hero Section --- */}
                <section className="hero-section">
                    <div className="glow glow-accent"></div>
                    <div className="glow glow-primary"></div>

                    <div className="hero-grid">
                        <div className="hero-content">
                            <span className="pill-trust fade-in-up">Trusted by shippers worldwide</span>
                            <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
                                The Smartest Way to Clear Customs
                            </h1>
                            <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Verify documents, book appointments, and track your goods with our intelligent AI Assistant.
                            </p>
                            <div className="hero-actions fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <button className="btn-accent-gradient" onClick={onNavigateToLogin}>Get Started</button>
                                <button className="btn-ghost">Learn More</button>
                            </div>
                            <div className="hero-stats fade-in-up" style={{ animationDelay: '0.8s' }}>
                                <div className="pill-stat"><strong>2k+</strong> Documents/day</div>
                                <div className="pill-stat"><strong>99.9%</strong> Verification accuracy</div>
                                <div className="pill-stat"><strong>24/7</strong> AI guidance</div>
                            </div>
                        </div>
                        <div className="hero-image-container fade-in-up" style={{ animationDelay: '0.5s' }}>
                           <img src="/src/assets/images/login-background.png" alt="Trucks at a shipping port" className="hero-image"/>
                        </div>
                    </div>
                </section>

                {/* --- How It Works Section --- */}
                <section id="how-it-works" className="section section-white">
                    <div className="section-container text-center">
                        <h2 className="section-title fade-in-up">How it Works</h2>
                        <div className="video-container">
                            <video autoPlay muted loop playsInline>
                                <source src="/hiw_video.mp4" type="video/mp4" /> 
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="features-grid fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="card-feature">
                                <div className="icon-chip">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                </div>
                                <h3 className="card-title">Upload & Verify</h3>
                                <p>Upload documents and let our system validate them instantly.</p>
                            </div>
                            <div className="card-feature">
                                <div className="icon-chip">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                </div>
                                <h3 className="card-title">Get AI Guidance</h3>
                                <p>Receive AI-backed guidance on regulations and requirements.</p>
                            </div>
                            <div className="card-feature">
                                <div className="icon-chip">
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                                </div>
                                <h3 className="card-title">Export with Confidence</h3>
                                <p>Book appointments and export with everything verified.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Testimonials Section --- */}
                <section id="reviews" className="section">
                    <div className="section-container text-center">
                        <h2 className="section-title fade-in-up">What Our Customers Say</h2>
                        <div className="testimonials-grid fade-in-up" style={{ animationDelay: '0.2s' }}>
                             <div className="card-testimonial">
                                <img src="https://placehold.co/64x64/EBF1F6/2D3A5D?text=A" alt="Amara S." className="testimonial-avatar" />
                                <div className="testimonial-stars">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p>"Cut our clearance time by 50%. A game changer for our logistics."</p>
                                <h4 className="testimonial-name">Amara S.</h4>
                                <span className="testimonial-title">Logistics Manager</span>
                            </div>
                           <div className="card-testimonial">
                                <img src="https://placehold.co/64x64/EBF1F6/2D3A5D?text=J" alt="John M." className="testimonial-avatar" />
                                <div className="testimonial-stars">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p>"The AI document verification is instant and reliable. Highly recommended!"</p>
                                <h4 className="testimonial-name">John M.</h4>
                                <span className="testimonial-title">Import/Export Specialist</span>
                            </div>
                           <div className="card-testimonial">
                                <img src="https://placehold.co/64x64/EBF1F6/2D3A5D?text=S" alt="Sophia L." className="testimonial-avatar" />
                                <div className="testimonial-stars">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p>"The AI assistant is a game changer. We love it."</p>
                                <h4 className="testimonial-name">Sophia L.</h4>
                                <span className="testimonial-title">Supply Chain Director</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Countries Section --- */}
                <section id="countries" className="section section-white">
                    <div className="section-container text-center">
                        <h2 className="section-title fade-in-up">Supporting Your Global Trade</h2>
                        <div className="countries-grid fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="card-country">US</div>
                            <div className="card-country">EU</div>
                            <div className="card-country">CN</div>
                            <div className="card-country">GB</div>
                            <div className="card-country">JP</div>
                            <div className="card-country">IN</div>
                        </div>
                    </div>
                </section>

                {/* --- Features Section --- */}
                <section id="features" className="section">
                    <div className="section-container">
                         <h2 className="section-title text-center fade-in-up">Everything you need to clear customs</h2>
                        <div className="features-grid fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="card-feature-alt">
                                <h3 className="card-title">AI-Powered Document Verification</h3>
                                <p>Our system cross-references your documents with country-specific rules.</p>
                            </div>
                             <div className="card-feature-alt">
                                <h3 className="card-title">Appointment Booking</h3>
                                <p>Schedule export appointments directly from the platform.</p>
                            </div>
                             <div className="card-feature-alt">
                                <h3 className="card-title">Real-Time Tracking</h3>
                                <p>Track goods from booking to delivery with live updates.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="cta-section">
                    <div className="cta-bg-overlay"></div>
                    <div className="glow glow-accent"></div>
                    <div className="glow glow-primary"></div>
                    <div className="section-container text-center">
                        <h2 className="section-title fade-in-up">Ready to clear customs faster?</h2>
                        <p className="cta-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Manage documents, appointments, and tracking, all in one place.
                        </p>
                        <div className="cta-actions fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <button className="btn-accent-gradient" onClick={onNavigateToLogin}>Create Account</button>
                            <button className="btn-ghost" onClick={onNavigateToLogin}>Login</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- Footer --- */}
            <footer className="site-footer">
                <div className="section-container">
                    <div className="footer-grid">
                        <div className="footer-column">
                           <a href="#" aria-label="Home">
                                <Logo />
                           </a>
                            <p className="footer-tagline">Simplifying global trade, one shipment at a time.</p>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-heading">Navigation</h4>
                            <ul className="footer-links">
                                <li><a href="#how-it-works">How it Works</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                             <h4 className="footer-heading">Contact</h4>
                            <ul className="footer-links">
                                <li><a href="mailto:support@cc.io">support@cc.io</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                         <div className="footer-column">
                             <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

