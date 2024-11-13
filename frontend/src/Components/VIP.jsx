import React from 'react'
import './VIP.css'

function VIP() {
    return (
        <>
            {/* Header Section */}
            <header>
                <div className="header-title">Vip</div>
                <div className="header-icon"></div>
            </header>

            {/* Main Section */}
            <main>
                <div className="now_1">
                    Current level:
                    <span>None</span>
                </div>
                <div className="product-list-cont">
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/one.jpg" alt="" />
                        </div>
                        <div className="vip_item">VIP1</div>
                        <div className="vip_item">500.00</div>
                    </div>

                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/two.jpg" alt="" />
                        </div>
                        <div className="vip_item">VIP2</div>
                        <div className="vip_item">1600.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/three.webp" alt="" />
                        </div>
                        <div className="vip_item">VIP3</div>
                        <div className="vip_item">2600.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/four.webp" alt="" />
                        </div>
                        <div className="vip_item">VIP4</div>
                        <div className="vip_item">5200.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/five.jpg" alt="" />
                        </div>
                        <div className="vip_item">VIP5</div>
                        <div className="vip_item">9300.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/six.jpg" alt="" />
                        </div>
                        <div className="vip_item">VIP6</div>
                        <div className="vip_item">14352.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/seven.png" alt="" />
                        </div>
                        <div className="vip_item">VIP7</div>
                        <div className="vip_item">18590.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/eight.jpg" alt="" />
                        </div>
                        <div className="vip_item">VIP8</div>
                        <div className="vip_item">22000.00</div>
                    </div>
                    <div className="vip_list">
                        <div className="vip_item">
                            <img src="/images/nine.png" alt="" />
                        </div>
                        <div className="vip_item">VIP9</div>
                        <div className="vip_item">45000.00</div>
                    </div>
                </div>


                <div className="vip_introduce">
                    <div>
                        <p>
                            <span style={{ color: "#FF0000" }}>
                                <strong>
                                    When you purchase products with a total value of 400RS, your account will be upgraded to VIP1.
                                </strong>
                            </span>
                        </p>

                        <p>
                            <span style={{ color: "#FF0000" }}>
                                <strong>
                                    When you purchase products with a total value of 2000RS, your account will be upgraded to VIP2.
                                </strong>
                            </span>
                        </p>

                        <p>
                            <span style={{ color: "#FF0000" }}>
                                <strong>
                                    When you purchase products with a total value of 5000RS, your account will be upgraded to VIP3.
                                </strong>
                            </span>
                        </p>

                        <p>
                            <span style={{ color: "#FF0000" }}>
                                <strong>
                                    When you purchase products with a total value of 10000RS, your account will be upgraded to VIP4.
                                </strong>
                            </span>
                        </p>

                        <p>
                            <span style={{ color: "#FF0000" }}>
                                <strong>
                                    .............
                                </strong>
                            </span>
                        </p>

                        <p>
                            <br />
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VIP
