import React from "react";
import '../CSS/videoShowcase.css'; // This now points to the new CSS file
import sampleVideo from '../assets/videoShowcase.mp4';

const VideoShowcase = () => {
    return (
        // The main container provides the full-screen effect and content centering
        <div className="video-showcase-container">
            {/* Background Video (for ambient effect) */}
            <video 
                className="showcase-video" 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://placehold.co/1920x1080/1a1a1a/dddddd?text=Video+Loading" 
            >
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Content Overlay */}
            <div className="video-overlay">
                <div className="content-box">
                    <h1 className="welcome-title">Welcome to Wayra Records!</h1>
                    <p className="introduction-text">
                        We want to bridge innovative music and art, creating new ways to experience different scenes and forms of expression in one place.
                    </p>
                    
                    {/* Latest Release Video Player */}
                    <div className="latest-video-frame">
                        <video 
                            controls 
                            poster="https://placehold.co/1280x720/111111/dddddd?text=LATEST+RELEASE" // Specific thumbnail for the feature video
                            title="Latest Release"
                        >
                            {/* You can use the same sampleVideo for demonstration, 
                                or a different, shorter clip for the main feature box. */}
                            <source src={sampleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default VideoShowcase;