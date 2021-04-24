import React from 'react';

export function StoreNew() {
    return (
        <section className="store-gear-bg">
            <div className="sg-txt">
                NEW
            </div>
            <div className="sg-bg">
                <div className="sg-txt-moblie">
                    NEW
                </div>
                <a className="sg-img" style={{ backgroundImage: "url(./img/products/new/new-1-720x.webp)" }}>
                </a>
                <div className="sg-bt">
                    <a href="" className="sg-link">View Item</a>
                    <img src="./img/products/icon/view-arrow.svg"></img>
                </div>
            </div>
            <div className="sg-bg">
                <div className="sg-txt-moblie">
                    NEW
                </div>
                <a className="sg-img" style={{ backgroundImage: "url(./img/products/new/new-2-720x.webp)" }}>
                </a>
                <div className="sg-bt">
                    <a href="" className="sg-link">View Item</a>
                    <img src="./img/products/icon/view-arrow.svg"></img>
                </div>
            </div>
        </section>
    )
}