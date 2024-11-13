import React, { useContext, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import AppContext from '../Context';
import { useNavigate } from 'react-router-dom'
import './Event.css'


const EventProduct = () => {

    let investmentData = useContext(AppContext)
    // console.log("invest data", investmentData);
    // console.log(investmentData[9].events[0].vipPrice);



    const [homeAmount, setHomeAmout] = useState(500)
    let Navigate = useNavigate();


    function goodDetail1Handler() {
        Navigate('/events-page1')
    }

    function rechargeHandler() {
        Navigate('/recharge')
    }

    function withdrawHandler() {
        Navigate('/withdraw')
    }

    function addBankHandler() {
        Navigate('/addBank')
    }

    function EvenetProductHandler() {
        Navigate('/events')
    }



    function HomePageHandler() {
        Navigate('/')
    }


    const images = [
        "/images/appLogo.jpeg",
        "/images/tata2.jpeg",
        "/images/tata3.jpeg"
    ]

    const [curr, setCurr] = useState(0)

    const nextSlide = () => {
        setCurr(curr === images.length - 1 ? 0 : curr + 1)
    }


    const investbtnHandler = () => {
        Navigate('/gooddetail11')
    }


    return (
        <>
            <header>
                <div className="header-title">Event Product</div>
                <div className="header-icon"></div>
            </header>
            <main>

                <div className="head-img container my-5">
                    {/* <img src="/images/appLogo.jpeg" alt="" /> */}
                    <div className="row text-center">
                        <div className="col-6">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                {
                                    images.map((value, index) =>
                                        curr === index && (
                                            <div key={index} className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={value} className="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
                                    onClick={nextSlide}
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"><FaArrowCircleRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="home_travel">
                    <div className="home_travel_item">
                        <div className="travel_item_head">
                            <img src="/images/recharge.webp" />
                        </div>
                        <button onClick={rechargeHandler} className="travel_item_cont">Recharge</ button>
                    </div>

                    <div className="home_travel_item">
                        <div className="travel_item_head">
                            <img src="/images/withdraw.webp" />
                        </div>
                        <button onClick={withdrawHandler} className="travel_item_cont">Withdraw</button>
                    </div>

                    <div className="home_travel_item">
                        <div className="travel_item_head">
                            <img src="/images/bank.webp" />
                        </div>
                        <button onClick={addBankHandler} className="travel_item_cont">Bank</button>
                    </div>

                </div>
                <div className="box-green">
                    {/* <div className="typeItem" data-val="product-box1">Normal Product</div> */}
                    <div className="typeItem active" data-val="product-box3" onClick={HomePageHandler}>VIP Products</div>
                    <div className="typeItem" data-val="product-box2" onClick={EvenetProductHandler}>Event Products</div>
                </div>
                <div className="content">
                    <div className="product-list product-box3">
                        <div className="product-box">
                            <div className="price">₹ {investmentData[9].events[0].vipPrice}</div>
                            <div className="product-type">{investmentData[9].events[0].vipName}</div>
                            <div className="product-img">
                                <img src="/images/eventProduct2.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[9].events[0].vipName}</div>
                                <div className="product-day"><span>{investmentData[9].events[0].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[9].events[0].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[9].events[0].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                {/* <div className="product-btn" data-id="10">Invest</div> */}
                                <button onClick={goodDetail1Handler} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[9].events[1].vipPrice}</div>
                            <div className="product-type">{investmentData[9].events[1].vipName}</div>
                            <div className="product-img">
                                <img src='/images/eventProduct1.jpeg' alt='' />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[9].events[1].vipName}</div>
                                <div className="product-day"><span>{investmentData[9].events[1].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[9].events[1].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[9].events[1].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                {/* <div className="product-btn" data-id="10">Invest</div> */}
                                <button onClick={investbtnHandler} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default EventProduct
