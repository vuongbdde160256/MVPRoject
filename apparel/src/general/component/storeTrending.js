import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trending } from './storeData';
export function StoreTrending() {
    const settings = {
        fade: true,
        infinity: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <>
            <div className="trend-background">
                <div className="trend-title">
                    <div className="trend-title-left">
                        <span class="slide-link">Gear and clothing</span>
                    </div>
                    <div className="trend-title-middle">
                        <h1>TRENDING</h1>
                    </div>
                    <div className="trend-title-right">
                        <div className="icon-trend">
                            <img src="./img/products/icon/icon-trending.svg"></img>
                        </div>
                        <div className="line-trend-right">
                            <span className="trend-txt">Special offer</span>
                            <span class="slide-link"></span>
                        </div>
                    </div>
                </div>
                <section className="trend-background-contanier">
                    {Trending.map((item, index) => {
                        return (
                            <div className="trend-slider">
                                <div className="trend-dersc">
                                    <div className="trend-dersc-title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="trend-dersc-txt">
                                        <p>{item.dersc}</p>
                                    </div>
                                    <div className="trend-vi">
                                        <p>View Item</p>
                                        <img src="./img/products/icon/view-arrow.svg"></img>
                                    </div>
                                </div>
                                <div className="trend-imgs">
                                    <div className="trend-arrow-left">
                                        <img src="./img/products/icon/rotate-arrow-left.png"></img>
                                    </div>
                                    <div className="trend-img">
                                        <picture>
                                            <img src={"./img/products/trend/" + item.img} alt=""></img>
                                        </picture>
                                    </div>
                                    <div className="trend-arrow-right">
                                        <img src="./img/products/icon/rotate-arrow-right.png"></img>
                                    </div>
                                </div>
                                <div className="trend-price">
                                    <div className="price-txt">
                                        <p>Price</p>
                                        <h2>{item.price}</h2>
                                    </div>
                                    <div className="quanity">
                                        <p>Quanity</p>
                                        <div className="quanity-counter">
                                            <span className="down">-</span>
                                            <input type="text" value="1"></input>
                                            <span className="up">+</span>
                                        </div>
                                    </div>
                                    <div className="size-type" style={{ opacity: item.displaySize }}>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">XS</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">S</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">M</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">L</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">XL</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">2XL</label>
                                        </span>
                                        <span className="size">
                                            <input type="radio" name="size" id="trending-size-4697657114694-xs" value="XS" tabindex="0">
                                            </input>
                                            <label for="trending-size-4697657114694-xs">3XL</label>
                                        </span>
                                    </div>
                                    <div className="btn">

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}
