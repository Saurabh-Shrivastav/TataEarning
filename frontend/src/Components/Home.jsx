import React, { useContext, useState } from 'react'
import './Home.css'
// import GoodsDetail from './GoodsDetail1'
import { useNavigate } from 'react-router-dom'
// import Navbar from './Navbar';
import AppContext from '../Context';
import { FaArrowCircleRight } from "react-icons/fa";




function Home() {

    // const [phone, setPhone] = useState()


    let investmentData = useContext(AppContext)
    // console.log(investmentData);

    const [homeAmount, setHomeAmout] = useState(500)
    let Navigate = useNavigate();


    function goodDetail1Handler() {
        Navigate('/gooddetail1')
    }

    function rechargeHandler() {
        Navigate('/recharge')
    }

    function withdrawHandler() {
        Navigate('/withdraw')
        // const userPhone = localStorage.getItem('userPhone', phone)
        // console.log(userPhone);
        
    }

    function addBankHandler() {
        Navigate('/addBank')
    }

    function EvenetProductHandler() {
        Navigate('/events')
    }


    const images = [
        "/images/appLogo.jpeg",
        "/images/tata2.jpeg",
        "/images/tata3.jpeg"
    ]

    const [curr, setCurr] = useState(0)

    const nextSlide = ()=>{
         setCurr(curr === images.length-1 ? 0 : curr+1)
    }

    // const prevSlide = ()=>{
    //      setCurr(curr === 0 ? images.length-1 : curr+1)
    // }

    return (
        <>
            {/* Header Section */}
            <header>
                <div className="header-title">Home</div>
                <div className="header-icon"></div>
            </header>

            {/* Main Section */}
            <main>
                <div className="head-img container my-5">
                    {/* <img src="/images/appLogo.jpeg" alt="" /> */}
                    <div className="row text-center">
                        <div className="col-6">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                {
                                    images.map((value, index) => 
                                    curr===index &&       (
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
                    <div className="typeItem active" data-val="product-box3">VIP Products</div>
                    <div className="typeItem" data-val="product-box2" onClick={EvenetProductHandler}>Event Products</div>
                </div>
                <div className="content">
                    <div className="product-list product-box3">
                        <div className="product-box">
                            <div className="price">₹ {investmentData[0].vipPrice}</div>
                            <div className="product-type">{investmentData[0].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img1.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[0].vipName}</div>
                                <div className="product-day"><span>{investmentData[0].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[0].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[0].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                {/* <div className="product-btn" data-id="10">Invest</div> */}
                                <button onClick={goodDetail1Handler} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[1].vipPrice}</div>
                            <div className="product-type">{investmentData[1].vipName}</div>
                            <div className="product-img">
                                <img src='/images/img2.jpeg' alt='' />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[1].vipName}</div>
                                <div className="product-day"><span>{investmentData[1].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[1].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[1].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                {/* <div className="product-btn" data-id="10">Invest</div> */}
                                <button onClick={() => (Navigate('gooddetail2'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[2].vipPrice}</div>
                            <div className="product-type">{investmentData[2].vipName}</div>
                            <div className="product-img">
                                <img src='/images/img3.jpeg' alt='' />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[2].vipName}</div>
                                <div className="product-day"><span>{investmentData[2].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹P{investmentData[2].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[2].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail3'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[3].vipPrice}</div>
                            <div className="product-type">{investmentData[3].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img4.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[3].vipName}</div>
                                <div className="product-day"><span>{investmentData[3].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[3].dayIncome}</span>
                                        / Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[3].totalIncome}</span>
                                        / Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail4'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[4].vipPrice}</div>
                            <div className="product-type">{investmentData[4].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img5.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[4].vipName}</div>
                                <div className="product-day"><span>50 Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[4].dayIncome}</span>
                                        /Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[4].totalIncome}/</span>
                                        Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail5'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[5].vipPrice}</div>
                            <div className="product-type">{investmentData[5].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img6.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[5].vipName}</div>
                                <div className="product-day"><span>{investmentData[5].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[5].dayIncome}/</span>
                                        Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[5].totalIncome}/</span>
                                        Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail6'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[6].vipPrice}</div>
                            <div className="product-type">{investmentData[6].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img7.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[6].vipName}</div>
                                <div className="product-day"><span>{investmentData[6].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[6].dayIncome}/</span>
                                        Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[6].totalIncome}/</span>
                                        Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail7'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[7].vipPrice}</div>
                            <div className="product-type">{investmentData[7].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img8.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[7].vipName}</div>
                                <div className="product-day"><span>{investmentData[7].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[7].dayIncome}/</span>
                                        Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[7].totalIncome}/</span>
                                        Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail8'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                        <div className="product-box">
                            <div className="price">₹ {investmentData[8].vipPrice}</div>
                            <div className="product-type">{investmentData[8].vipName}</div>
                            <div className="product-img">
                                <img src="/images/img9.jpeg" alt="" />
                            </div>
                            <div className="product-desc">
                                <div className="product-name">{investmentData[8].vipName}</div>
                                <div className="product-day"><span>{investmentData[8].vipDays} Days</span></div>
                            </div>
                            <div className="product-detail">
                                <div className="product-detail-info">
                                    <div>
                                        <span>₹{investmentData[8].dayIncome}/</span>
                                        Day Income
                                    </div>
                                    <div>
                                        <span>₹{investmentData[8].totalIncome}/</span>
                                        Total Income
                                    </div>
                                </div>
                                <button onClick={() => (Navigate('gooddetail9'))} className="product-btn" data-id="10">Invest</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
