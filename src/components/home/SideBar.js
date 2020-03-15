import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="my-albums">
                <div className="album-button">
                    <h2>album name</h2>
                </div>
                <div className="album-button">
                    <h2>album name</h2>
                </div>
                <div className="album-button">
                    <h2>album name</h2>
                </div>
                <div className="album-button">
                    <h2>album name</h2>
                </div>
                <div className="album-button">
                    <h2>album name</h2>
                </div>
            </div>
            <div className="upload-image">
                upload image
            </div>
        </div>
    );
}

export default SideBar;
