import React from 'react';
import './DashboardPage.css';

// --- SVG Icon Components (for cleanliness) ---

const Logo = () => (
    <div className="logo">
        <div className="logo-icon-wrapper">
            <span className="logo-icon-text">C</span>
        </div>
        <span className="logo-text-light">Custom Clearance</span>
    </div>
);

// A generic icon component
const Icon = ({ path, className = "icon" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
);


// --- Main Dashboard Page Component ---

const DashboardPage = () => {
    return (
        <div className="dashboard-layout">
            {/* --- Sidebar --- */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <Logo />
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item active">
                            <a href="#">
                                <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">
                                <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                <span>Documents</span>
                            </a>
                        </li>
                         <li className="nav-item">
                            <a href="#">
                                <Icon path="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                <span>AI Assistant</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">
                                <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                <span>Appointments</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">
                                 <Icon path="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                <span>Tracking</span>
                            </a>
                        </li>
                         <li className="nav-item">
                            <a href="#">
                                <Icon path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                <span>Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* --- Main Content --- */}
            <div className="main-content">
                {/* --- Header --- */}
                <header className="main-header">
                    <h1 className="header-title">Dashboard</h1>
                    <div className="header-actions">
                        <button className="icon-btn">
                            <Icon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </button>
                        <img src="https://placehold.co/40x40/EBF1F6/2D3A5D?text=J" alt="User Avatar" className="user-avatar" />
                    </div>
                </header>
                
                {/* --- Dashboard Widgets --- */}
                <main className="dashboard-main">
                    {/* At a Glance Card */}
                    <section className="at-a-glance-card">
                        <div className="glance-main">
                            <div className="donut-chart-wrapper">
                                <svg className="donut-chart" width="100" height="100" viewBox="0 0 36 36">
                                    <path className="donut-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="donut-segment" strokeDasharray="95, 5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <span className="donut-text">95%</span>
                            </div>
                            <div className="glance-title">Overall Status</div>
                        </div>
                        <div className="glance-metrics">
                            <div className="metric-item">
                                <span className="metric-value">45 of 50</span>
                                <span className="metric-label">Documents Verified</span>
                            </div>
                             <div className="metric-item">
                                <span className="metric-value">3</span>
                                <span className="metric-label">Appointments Booked</span>
                            </div>
                             <div className="metric-item">
                                <span className="metric-value">1</span>
                                <span className="metric-label">Shipments in Transit</span>
                            </div>
                        </div>
                    </section>

                    {/* Dashboard Grid */}
                    <div className="dashboard-grid">
                        <section className="widget shipment-widget">
                             <h3 className="widget-title">Current Shipment</h3>
                             <p className="tracking-number">#AB-123456789</p>
                             <div className="timeline">
                                <div className="timeline-item current">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <strong>In Transit</strong>
                                        <span>Last update: New York, USA</span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <strong>Customs Cleared</strong>
                                        <span>Awaiting next scan</span>
                                    </div>
                                </div>
                                 <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <strong>Delivered</strong>
                                        <span>Pending</span>
                                    </div>
                                </div>
                             </div>
                             <img src="https://placehold.co/400x200/EBF1F6/2D3A5D?text=Map+Preview" alt="Map Preview" className="map-preview" />
                        </section>

                        <section className="widget document-widget">
                           <h3 className="widget-title">Recent Document Activity</h3>
                           <ul className="document-list">
                                <li className="document-item">
                                    <div className="doc-info">
                                        <span className="doc-icon pdf">PDF</span>
                                        <span className="doc-name">Commercial_Invoice.pdf</span>
                                    </div>
                                    <div className="doc-status">
                                        <span className="status-badge verified">Verified</span>
                                        <span className="doc-date">Oct 3, 2025</span>
                                    </div>
                                </li>
                                <li className="document-item">
                                     <div className="doc-info">
                                        <span className="doc-icon docx">DOCX</span>
                                        <span className="doc-name">Packing_List_Final.docx</span>
                                    </div>
                                    <div className="doc-status">
                                        <span className="status-badge error">Error</span>
                                         <span className="doc-date">Oct 2, 2025</span>
                                    </div>
                                </li>
                                <li className="document-item">
                                     <div className="doc-info">
                                        <span className="doc-icon jpg">JPG</span>
                                        <span className="doc-name">Bill_of_Lading.jpg</span>
                                    </div>
                                    <div className="doc-status">
                                        <span className="status-badge pending">Pending</span>
                                        <span className="doc-date">Oct 1, 2025</span>
                                    </div>
                                </li>
                           </ul>
                           <button className="widget-cta">View All Documents</button>
                        </section>

                         <section className="widget ai-widget">
                             <h3 className="widget-title">Your Customs Assistant</h3>
                             <p className="ai-greeting">Hello, Jane!</p>
                             <p className="ai-prompt">"Ask me about exporting to the UK."</p>
                             <button className="widget-cta">Open AI Assistant</button>
                        </section>

                        <section className="widget activity-feed">
                             <h3 className="widget-title">Recent Activity</h3>
                             <ul className="feed-list">
                                 <li className="feed-item">
                                     <span className="feed-icon approved">✓</span>
                                     <p><strong>Commercial_Invoice.pdf</strong> was successfully verified.</p>
                                     <span className="feed-time">1h ago</span>
                                 </li>
                                 <li className="feed-item">
                                      <span className="feed-icon error">!</span>
                                     <p><strong>Packing_List_Final.docx</strong> has an error. Please review.</p>
                                     <span className="feed-time">Yesterday</span>
                                 </li>
                                 <li className="feed-item">
                                      <span className="feed-icon new">↑</span>
                                     <p>You uploaded <strong>Bill_of_Lading.jpg</strong> for review.</p>
                                      <span className="feed-time">2 days ago</span>
                                 </li>
                             </ul>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
