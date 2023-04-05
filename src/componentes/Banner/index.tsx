import React from 'react';
import './Banner.css';

interface BannerProps {
    source: string;
    alt?: string;
}

export const Banner = ({ source, alt } :BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={source} alt={alt} />
        </header>
    )
}

export default Banner;

