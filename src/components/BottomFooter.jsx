import React from 'react'

const BottomFooter = () => {
    const date = new Date();
    const year = date.getFullYear();


    return (
        <div className="bottom-footer bg-color-one py-8">
            <div className="container container-lg">
                <div className="bottom-footer__inner gap-16 py-16" style={{textAlign: "center"}}>
                    <p className="bottom-footer__text">
                        FarmSpot © {year}. All Rights Reserved{" "}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default BottomFooter