import React from "react";
import "./trending.css";
import Slider from "react-slick";
import { TrendingCard } from "./component/trendingCard";
import { TrendingData } from "./component/trendingData";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " TrendingSlickArrow" + " TrendingSlickRight"}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "calc(30% + 20px)",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " TrendingSlickArrow" + " TrendingSlickLeft"}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "30%",
        zIndex: "100"
      }}
      onClick={onClick}
    />
  );
}
export class TrendingLayout extends React.Component {
  render() {
    const settingBannerSlide = {
      // centerMode: true,
      lazyLoad: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: true,
      focusOnSelect: false,
      initialSlide: 0, // slide to start
      useTransform: false,
      waitForAnimate: true,
      dots: false,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      // asNavFor: ".thumbnail_slider",
    };
    return (
      <>
        <div className="trending__layout_">
          <div className="trendingCard__header_">
            <span className="gc-h">Gear and Clothing</span>
            <h2>TRENDING</h2>
            <div className="so-con">
              <div style={{ border: "1px solid black", borderRadius: "50%" }}>
                %
              </div>
              <a className="so-h" href>
                Special Offer
              </a>
            </div>
          </div>
          <div className="trendingCard__body_">
            <Slider className="tb__slides_"{...settingBannerSlide}>
              {TrendingData.map((data)=>(
                <TrendingCard data={data}></TrendingCard>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
