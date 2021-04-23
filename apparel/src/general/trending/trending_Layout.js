import React from "react";
import Slider from "react-slick";
import "./trending.css";
export class TrendingLayout extends React.Component {
  render() {
    const settingBannerSlide = {
      // centerMode: true,
      lazyLoad: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: false,
      focusOnSelect: false,
      initialSlide: 0, // slide to start
      useTransform: false,
      waitForAnimate: true,
      dots: false,
      // asNavFor: ".thumbnail_slider",
    };
    const TrendingList = [
      {
        name: "hieu",
        color: "red",
      },
      { name: "tan", color: "aqua" },
    ];
    return (
      <>
        <div className="trending__layout_">
          {/* <Slider className="trending__slides_" {...settingBannerSlide}>
            {TrendingList.map((trending)=>(
                <div className="trending__slide_">
                    <div style={{width: "100%", height: "100vh", background: trending.color}}></div>
                </div>
            ))}
          </Slider> */}
          <div className="trendingCard__header_">
            <span className="gc-h">Gear and Clothing</span>
            <h2>TRENDING</h2>
            <div className="so-con">
              <div style={{ border: "1px solid black", borderRadius: "50%" }}>
                %
              </div>
              <a className="so-h">Special Offer</a>
            </div>
          </div>
          <TrendingCard />
        </div>
      </>
    );
  }
}
const TrendingCard = () => {
  return (
    <section className="trendingCard__lt_">
      <div className="ctc-left">
        <h3>Rosso range T-shirt</h3>
        <p>
          Dedicated to the MV Agusta Rosso model range, the special T-Shirt
          features elegant colours inspir...
        </p>
        <a>View item</a>
      </div>
      <div className="ctc-center"></div>
      <div className="ctc-right">
        <h3 content-vl="Price">€44.00</h3>
      </div>
    </section>
  );
};
