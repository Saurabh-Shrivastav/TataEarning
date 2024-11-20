import React from 'react'
import './Order.css'
import { useNavigate } from 'react-router-dom'


function Order() {
    const navigate = useNavigate()

    function purchaseHandler (){
        navigate('/purchase')
    }
    return (
        <>
          {/* Header Section */}
          <header>
            <div className="header-title">Order</div>
            <div className="header-icon"></div>
          </header>

          {/* Main Section */}
          <main>
            <div className="order-head">
                <div className="order-tj">
                    <div className="order-tj-item">
                        <div className="tj-money">₹0</div>
                        <div className="tj-cont">Total Profit</div>
                    </div>
                    <div className="order-tj-item">
                        <div className="tj-money">₹0</div>
                        <div className="tj-cont">Unsettled income</div>
                    </div>
                    <div className="order-tj-item">
                        <div className="tj-money"></div>
                        <div className="tj-cont"> </div>
                    </div>
                </div>
                <div className="order-tjj">
                    <div className="tj-money">0</div>
                    <div className="tj-cont">Product Quality</div>
                </div>
            </div>
            <div className="product-list">
                <div className="tab-to">
                    <button onClick={purchaseHandler} className='btn'>Purchased</button>
                    <button className='btn'>Already Expired</button>
                    {/* <div className="active" data-val="w">Purchased</div>
                    <div className='allready' data-val="y">Already Expired</div> */}
                </div>
            </div>
            <div className="product-list-cont"></div>
          </main>
        </>
    )
}

export default Order
