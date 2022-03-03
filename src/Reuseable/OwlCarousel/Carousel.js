import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.scss"

export const CarouselView = ({ items, displayItems }) => {
    const options = {
        loop: false,
        stagePadding: 15,
        margin: 10,
        nav: true,
        navText: [
            '<span className="uk-margin-small-right uk-icon"><i class="fas fa-chevron-left"></i></span>',
            '<span className="uk-margin-small-left uk-icon"><i class="fas fa-chevron-right"></i></span>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            1200: {
                items: displayItems == 2 ? 2 : 3
            }
        }
    };
    return (
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
            {items.map((item, index) =>
                <div key={index} className="item">
                    {item}
                </div>
            )}
        </OwlCarousel>
    );
}