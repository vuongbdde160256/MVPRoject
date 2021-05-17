import React from "react";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";
export default function HeaderLayout({ headerData }) {
  return (
    <>
      <div
        className="itemPageHeader"
        style={{
          background: `${headerData.colorBg}`,
          backgroundColor: `${headerData.bg}`,
          position: "relative",
        }}
      >
        <Fade cascade>
          <div
            className="itemPageHeader-Content"
            style={{
              zIndex: 10,
              left: headerData.reveredContent === true ? 0 : null,
            }}
          >
            <div
              className="itemPageHeader-Content-top"
              style={{
                backgroundImage:
                  "url(./img/" + headerData.nameHeaderTitle + ")",
                backgroundSize: headerData.titleSize,
                height: headerData.heightContentTop,
              }}
            ></div>
            <div className="itemPageHeader-Content-center">
              <Fade bottom cascade>
                <div className="itemPageHeader-Content-center-top">
                  {headerData.manifesto_Arr.map((item, index) => (
                    <div className="itemPageHeader-manifesto">
                      <ScrollAnimation
                        delay={index * 300}
                        animateIn="fadeInUp"
                        animateOnce={true}
                      >
                        <p>{headerData.manifesto_Arr[index]}</p>
                      </ScrollAnimation>
                    </div>
                  ))}
                </div>
              </Fade>
              <div className="itemPageHeader-Content-center-bottom">
                <p>{headerData.contentHeaderContent}</p>
              </div>
            </div>

            <div className="itemPageHeader-Content-bottom">
              <p>Starting from {headerData.price} €</p>
            </div>
          </div>
        </Fade>
        <div
          className="xxxxx"
          style={{
            // backgroundImage: `url(./img/${headerData.bgHeaderParallax})`,
            width: "100%",
            height: "100%",
            position: "sticky",
            top: 0,
            backgroundPosition: "left",
            backgroundSize: "cover",
            transform: headerData.transformMedia,
          }}
        >
          <picture style={{ height: "100%" }}>
            <source
              media="(max-width: 565px)"
              srcset={
                headerData.hasOwnProperty("bgHeaderParallax_Mobile")
                  ? `./img/${headerData.bgHeaderParallax_Mobile}`
                  : null
              }
              // srcSet = {null}
            ></source>
            <source
              media="(max-width: 991px)"
              srcset={`./img/${headerData.bgHeaderParallax_Small}`}
            ></source>
            <img
              src={`./img/${headerData.bgHeaderParallax_Large}`}
              alt=""
              style={{
                position: headerData.position,
                right: headerData.posRight,
                width: headerData.width,
                bottom: headerData.posBottom,
                height: headerData.imgHeight,
              }}
            ></img>
          </picture>
        </div>
      </div>
    </>
  );
}
