import React from "react";
import { Fade } from "react-slideshow-image";
import { Spring } from "react-spring/renderprops";
import "react-slideshow-image/dist/styles.css";
export function StoreHeader({ bgSlides }) {
  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    canSwipe: true,
    scale: 0.4,
    pauseOnHover: false,
    prevArrow: (
      <div
        style={{
          width: "300px",
          marginRight: "0",
          position: "absolute",
          left: 0,
          height: "100vh",
          display: "none",
        }}
      ></div>
    ),
    nextArrow: (
      <div
        style={{
          width: "300px",
          marginRight: "0",
          position: "absolute",
          right: 0,
          height: "100vh",
          display: "none",
        }}
      ></div>
    ),
  };
  return (
    <>
      <div style={{ transition: "1s ease" }}>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <Fade {...properties} style={props}>
              {bgSlides.map((bgSlide, index) => (
                <div
                  className="each-fade"
                  style={{ background: bgSlide.bgColor }}
                >
                  <div>
                    <div className="slideImgContentLayout">
                      <div
                        className="slideImgContentLayout_top"
                        style={{ height: bgSlide.titleHeight }}
                      >
                        <div
                          className="img-bg-title"
                          style={{
                            backgroundImage:
                              "url(./img/homepage/" + bgSlide.titleSrc + ")",
                          }}
                        ></div>
                      </div>
                      <div className="slideImgContentLayout_center">
                        {bgSlide.content.map((bgContent) => (
                          <div className="sp-ly" style={{ color: "white" }}>
                            <p style={props}>{bgContent}</p>
                          </div>
                        ))}
                        <div className="bt-layout">
                          <button
                            type="button"
                            id={"bt-tt-" + index}
                            className="bt-tt-sl"
                          >
                            <a
                              style={{
                                color: bgSlide.color,
                                fontFamily: "'Russo One', sans-serif",
                                fontSize: "18px",
                              }}
                              href={bgSlide.link}
                            >
                              NEW IN
                            </a>
                          </button>
                          <button
                            style={{ marginLeft: "5px" }}
                            type="button"
                            id={"bt-tt-" + index}
                            className="bt-tt-sl"
                          >
                            <a
                              style={{
                                color: bgSlide.color,
                                fontFamily: "'Russo One', sans-serif",
                                fontSize: "18px",
                              }}
                              href={bgSlide.link}
                            >
                              SALE
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    <picture>
                      <source
                        media="(max-width: 575px)"
                        srcSet={"./img/products/small/" + bgSlide.imgSrc.small}
                        type="image/png"
                      ></source>
                      <source
                        media="(max-width: 991px)"
                        srcSet={
                          "./img/products/medium/" + bgSlide.imgSrc.medium
                        }
                        type="image/png"
                      ></source>
                      <source
                        media="(max-width: 1500px)"
                        srcSet={"./img/products/large/" + bgSlide.imgSrc.large}
                        type="image/png"
                      ></source>
                      <source
                        media="(min-width: 1501px)"
                        srcSet={"./img/products/large/" + bgSlide.imgSrc.large}
                        type="image/png"
                      ></source>
                      <img
                        alt="resized image"
                        src={"./img/products/large/" + bgSlide.imgSrc.large}
                      />
                    </picture>
                  </div>
                </div>
              ))}
            </Fade>
          )}
        </Spring>
      </div>
    </>
  );
}
