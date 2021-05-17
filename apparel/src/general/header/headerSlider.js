import HeaderLayout from "./headerLayout";
import "./headerSlider.css";
import React from "react";
import Slider from "react-slick";
import { HeaderData } from "./headerData";
export class HeaderSlider extends React.Component {
  render() {
    const settingBannerSlide = {
      // centerMode: true,
      lazyLoad: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: true,
      autoplay: true,
      draggable: true,
      focusOnSelect: false,
      initialSlide: 0, // slide to start
      useTransform: false,
      waitForAnimate: true,
      dots: false,
      autoplaySpeed: 2500,
      // asNavFor: ".thumbnail_slider",
    };
    return (
      <>
        <div className="a_header__layout_">
          <Slider className="a_header__slides_" {...settingBannerSlide}>
            {HeaderData.map((data) => (
              <div className="a_header__slide_">
                <HeaderLayout headerData={data} />
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
