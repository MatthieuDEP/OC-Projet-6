import React from 'react';
import './banner.scss'

export default function Banner({ title, imageSrcUrl, styles = '' }) {
    return (
        <div className={styles}>
            <h1 className='banner__Title'>{title}</h1>
            <div className='banner__Image'>
                <img src={imageSrcUrl} alt="bannière" />
            </div>
        </div>
    );
};