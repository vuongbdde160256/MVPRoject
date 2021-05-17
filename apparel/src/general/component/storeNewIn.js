import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataStoreNewIn } from './storeData';
import { Component } from 'react';
export class StoreNewIn extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    render() {
        const settings = {
            dot: true,
            arrows: false,
            infinity: true,
            focusOnSelect: true,
            speed: 200,
            autoplay: true,
            draggable: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive:[
                {
                    breakpoint:767,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint:986,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:2
                    }
                }
            ]
        };
        return (
            <div className="store-background">
                <div className="store-title">
                    <h1>NEW IN</h1>
                </div>
                <section className="product-background">
                    <div className="product-container">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {DataStoreNewIn.map((item, index) => {
                                return (
                                    <div className="product">
                                        <h3>{item.title}</h3>
                                        <div className="product-img-price">
                                            <div className="product-img">
                                                <img className="product-img-mvagusta" src={"./img/products/" + item.img}></img>
                                            </div>
                                            <div className="product-price">
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="store-all-btn">
                        <div className="store-area-btn">
                            <a href>
                                VIEW ALL
                            </a>
                        </div>
                        <div className="store-swiper-area" onClick={this.next}>
                            <div className="swiper-carousel">
                                <img src="./img/products/swipe-arrow-right.svg"></img>
                            </div>
                            <div className="swiper-carousel-mobile">
                                <span className ="swiper-text">Swipe</span>
                                <img src="./img/products/swipe-arrow-right-mobile.svg"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
