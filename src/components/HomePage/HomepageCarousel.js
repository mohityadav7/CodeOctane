import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import LoginSlide from './LoginSlide';
import TopPerformersSlide from './TopPerformersSlide';
import ContestSlide from './ContestSlide';

const HomepageCarousel = () => {
    return (
        <div className="homepage-carousel-container">
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                items={1}
                nav={false}
                autoplay
                autoplayTimeout={4000}
            >
                <div class="item"><LoginSlide /></div>
                <div class="item"><TopPerformersSlide /></div>
                <div class="item"><ContestSlide /></div>
            </OwlCarousel>
        </div>
    );
}

export default HomepageCarousel;