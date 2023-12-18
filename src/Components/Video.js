import React, { useState } from 'react';
import YouTube from 'react-youtube';
import videoThumb from '../../src/images/video-thumbnail.png'


const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const videoId = 'UPyNp-SVV4M';
    const opts = {
        height: '720',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = () => {
        setIsPlaying(true);
    };

    const handleReady = (event) => {
        setIsReady(true);
    };

    const handleStateChange = (event) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            // Video is playing
        }
    };

    return (
        <section className='py-12 z-20 relative'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-4 text-center animate__animated animate__jackInTheBox">The Videos</h2>
                <p className="text-lg text-gray-400 mb-8 text-center">
                    Dive into my <a href="https://www.youtube.com/@rajamanickamweb" target="_blank" className='text-[#61DAFB] hover:text-white mr-2' rel="noopener noreferrer">YouTube channel</a>for exclusive web development tutorials. I share insights, tips, and hands-on guidance to help you master the art of modern web development.
                </p>
                {!isPlaying ? (
                    <div className="relative border-[20px] rounded-[50px] border-slate-600">
                        <img
                            src={videoThumb}
                            alt="Video Thumbnail | Rajamanickam Youtube Channel"
                            className="w-full h-auto cursor-pointer rounded-3xl"
                            onClick={handleClick}
                        />
                        <div className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12">
                                <div className="w-full h-full bg-white rounded-full text-primary-500 relative">
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-8 h-8 md:w-12 md:h-12" width="24" height="24" fill="currentColor" onClick={handleClick} viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`border-[20px] rounded-[50px] border-slate-600 overflow-hidden ${isReady ? 'animate-fadeIn' : ''}`}>
                        <YouTube
                            videoId={videoId}
                            opts={opts}
                            onReady={handleReady}
                            onStateChange={handleStateChange}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Video;