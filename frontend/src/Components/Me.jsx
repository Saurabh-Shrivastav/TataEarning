import React, { useEffect, useState } from 'react'
import './Me.css'
import { useNavigate } from 'react-router-dom';
// import Context from '../Context2';



function Me() {
    const [userPhone, setUserPhone] = useState('');
    const [amounts, setAmounts] = useState([]);
    const [error, setError] = useState(null); // State to handle errors

    const Navigate = useNavigate()

    const phone = localStorage.getItem('userPhone');
    // console.log(phone);

    useEffect(() => {
                // console.log("Phone value: ", phone);
                const fetchWallet = async () => {
                    try {
                        const response = await fetch(`http://localhost:4000/wallet/${phone}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json', // If required
                            },
        
                        });
                        // console.log(response);
        
                        if (!response.ok) {
                            throw new Error('Failed to fetch wallet data');
                        }
        
                        const data = await response.json();
                        // console.log(data); // Check if data is correct
                        setAmounts(data.amount); // Update state with fetched amount
                    } catch (error) {
                        // console.error('Error fetching wallet data:', error);
                        setError('Error fetching wallet data');
                    }
                };
        
                fetchWallet();
            }, [phone]); // Trigger fetch when phone changes
        
            if (error) {
                return <p>{error}</p>; // Show error message if any
            }
        
            if (amounts === null) {                
                return <p>Loading...</p>; // Show loading state while fetching
            }


            
            

    useEffect(() => {
        const phone = localStorage.getItem('userPhone');
        if (phone) {
            setUserPhone(phone)
        }
    }, [])





    function supportHandler() {
        Navigate('/support')
    }



    return (
        <>
        
            <header>
                <div></div>
                <div className="header-title">My</div>
                <div className="header-icon notice">
                    <svg t="1713680439127" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="9485" width="24">
                        <path
                            d="M455.68 95.232V33.28h112.64v61.952c180.224 28.16 321.024 174.592 337.92 360.448v366.08H117.76V455.68c16.896-185.856 157.696-337.92 337.92-360.448zM230.4 709.12h563.2v-225.28c0-157.696-123.904-281.6-281.6-281.6s-281.6 123.904-281.6 281.6v225.28z m112.64 168.96h337.92v112.64H343.04v-112.64z m0 0"
                            fill="#FD591E" p-id="9486"></path>
                    </svg>
                </div>
            </header>

            <main style={{ padding: '0' }}>
                <div className="header">
                    <div className="userinfo">
                        <div className="userinfo-img">
                            <img src="/images/appLogo.jpeg" alt="" />
                        </div>
                        <div className="userinfo-cont">
                            <div className="cont-title">{userPhone}</div>
                        </div>
                    </div>

                    <div className="my-Balance">
                        <div className="my-Balance-item">
                            <div className="item-title">Amount</div>
                            <p> ₹{amounts}</p> {/*Display the amount*/}
                            {/* <div className="item-cont">₹{walletAmount}</div> */}
                            {/* <div className="item-cont">
                                {amounts.map((item) => (
                                    <li key={item._id}>Amount: {item.amount}</li>
                                ))}
                            </div> */}
                            {/* <div className="item-cont">Withdrawal available</div> */}

                        </div>
                        {/* <div className="my-Balance-item">
                            <div className="item-title">₹0.000</div>
                            <div className="item-cont">Recharge money</div>
                        </div> */}
                    </div>



                </div>

                <div className="mine-travel-cell">


                    <a href="/">
                        <div className="travel-cell-item">
                            <div>
                                <svg t="1726036356809" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4276" width="24">
                                    <path d="M147.872 96H880A48 48 0 0 1 928 144v415.2c0 10.816 3.648 21.344 10.4 29.824l2.112 2.688c7.36 9.28 7.36 22.336 0.064 31.616l-2.304 2.912a48 48 0 0 0-10.272 29.696V880a48 48 0 0 1-48 48h-736A48 48 0 0 1 96 880V147.872c0-12.736 5.056-24.928 14.08-33.92l3.84-3.904A48 48 0 0 1 147.904 96z" fill="#FFFFFF" p-id="4277"></path>
                                    <path d="M96 896c249.504-85.344 388.16-218.656 416-400C539.84 314.656 667.84 192 896 128l-32.032-32H125.728L96 126.752V896z" fill="#C49F74" p-id="4278"></path>
                                    <path d="M128 884.576v-34.24c212.256-81.728 328.16-201.344 352.384-359.2 25.824-168.512 132.256-289.92 315.392-363.136H896c-222.464 62.4-349.728 180.576-381.728 354.496l2.56 4.288c30.496 50.784 62.496 80.288 95.456 89.44l15.424 4.288-8.576 30.848-15.424-4.288c-35.52-9.888-68.064-36.32-97.984-78.72C468.8 685.664 342.88 804.384 128 884.608z" fill="#C49F74" p-id="4279"></path>
                                    <path d="M416.32 896v32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v354.72l-32-32.416V128H128v768h288.32zM896 896v-125.728l32-33.024V896a32 32 0 0 1-32 32h-154.4l31.008-32H896z" fill="#5D6D7E" p-id="4280"></path>
                                    <path d="M769.536 588.384L512 845.92V928h114.304l14.848-15.552-87.776-87.776 22.624-22.656 35.68 35.68 204.576-204.576-46.72-44.736z m22.624-22.624l94.112 90.112 46.784-48.96-91.008-91.04-49.888 49.888z m72 113.248l-24.8-23.744-205.056 205.056 28.96 28.992 200.928-210.304z m-22.112-208.384l135.744 135.776L640 960h-160v-127.36l362.048-362.016z" fill="#C49F74" p-id="4281"></path>
                                </svg>
                                <span>Change Password</span>
                            </div>

                            <div>
                                <svg t="1713179477381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8254" width="24">
                                    <path d="M609.28 512l-271.36 271.36 35.84 35.84 312.32-302.08L373.76 204.8l-35.84 35.84L609.28 512z" fill="#111111" p-id="8255"></path>
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className="travel-cell-item">
                            <div>
                                <svg t="1726036409188" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5311" width="24">
                                    <path d="M179.5 890.1C116.4 890.1 65 838.7 65 775.6V371.4c0-63.1 51.4-114.5 114.5-114.5h561.6c63.1 0 114.5 51.4 114.5 114.5v404.2c0 63.1-51.4 114.5-114.5 114.5H179.5z m0-584.6c-36.4 0-65.9 29.6-65.9 65.9v404.2c0 36.4 29.6 65.9 65.9 65.9h561.6c36.4 0 66-29.6 66-65.9V371.4c0-36.4-29.6-65.9-66-65.9H179.5z" fill="#6B400D" p-id="5312"></path>
                                    <path d="M521.3 511H195.2c-1.6 0-2.8-1.3-2.8-2.8v-44.1c0-1.6 1.3-2.8 2.8-2.8h326.1c1.6 0 2.8 1.3 2.8 2.8v44.1c0 1.6-1.2 2.8-2.8 2.8zM521.3 685.7H195.2c-1.6 0-2.8-1.3-2.8-2.8v-44.1c0-1.6 1.3-2.8 2.8-2.8h326.1c1.6 0 2.8 1.3 2.8 2.8v44.1c0 1.5-1.2 2.8-2.8 2.8zM625 547.1c-4.9 0-9.4-1.9-12.9-5.4l-48.6-48.8c-7.1-7.1-7.1-18.7 0-25.8 3.4-3.4 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3l35.8 35.9 72.2-72.5c3.4-3.5 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3c7.1 7.1 7.1 18.7 0 25.8L638 541.7c-3.6 3.5-8.2 5.4-13 5.4zM625 721.8c-4.9 0-9.4-1.9-12.9-5.4l-48.6-48.8c-7.1-7.1-7.1-18.7 0-25.8 3.4-3.4 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3l35.8 35.9 72.2-72.5c3.4-3.5 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3c7.1 7.1 7.1 18.7 0 25.8L638 716.4c-3.6 3.5-8.2 5.4-13 5.4z" fill="#6B400D" p-id="5313"></path>
                                    <path d="M853.5 371.4c0-62-50.4-112.4-112.4-112.4H179.5c-2.7 0-5.4 0.2-8.1 0.4l-1.1 0.1-0.3-1.1v-4.9c0-63.1 51.4-114.5 114.5-114.5h561.6c63.1 0 114.5 51.4 114.5 114.5v404.2c0 59.5-46.5 109.6-105.9 114.1l-1.1 0.1V371.4z" fill="#6B400D" p-id="5314"></path>
                                    <path d="M846.1 186.5H284.5c-36.9 0-67 30-67 67v4.5H741c62.6 0 113.5 50.9 113.5 113.5v352.3c32.9-4.2 58.5-32.1 58.5-66.1V253.5c0-37-30-67-66.9-67z" fill="#FFD524" p-id="5315"></path>
                                </svg>
                                <span>Recharge records</span>
                            </div>

                            <div>
                                <svg t="1713179477381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8254" width="24">
                                    <path d="M609.28 512l-271.36 271.36 35.84 35.84 312.32-302.08L373.76 204.8l-35.84 35.84L609.28 512z" fill="#111111" p-id="8255"></path>
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className="travel-cell-item">
                            <div>
                                <svg t="1726036409188" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5311" width="24">
                                    <path d="M179.5 890.1C116.4 890.1 65 838.7 65 775.6V371.4c0-63.1 51.4-114.5 114.5-114.5h561.6c63.1 0 114.5 51.4 114.5 114.5v404.2c0 63.1-51.4 114.5-114.5 114.5H179.5z m0-584.6c-36.4 0-65.9 29.6-65.9 65.9v404.2c0 36.4 29.6 65.9 65.9 65.9h561.6c36.4 0 66-29.6 66-65.9V371.4c0-36.4-29.6-65.9-66-65.9H179.5z" fill="#6B400D" p-id="5312"></path>
                                    <path d="M521.3 511H195.2c-1.6 0-2.8-1.3-2.8-2.8v-44.1c0-1.6 1.3-2.8 2.8-2.8h326.1c1.6 0 2.8 1.3 2.8 2.8v44.1c0 1.6-1.2 2.8-2.8 2.8zM521.3 685.7H195.2c-1.6 0-2.8-1.3-2.8-2.8v-44.1c0-1.6 1.3-2.8 2.8-2.8h326.1c1.6 0 2.8 1.3 2.8 2.8v44.1c0 1.5-1.2 2.8-2.8 2.8zM625 547.1c-4.9 0-9.4-1.9-12.9-5.4l-48.6-48.8c-7.1-7.1-7.1-18.7 0-25.8 3.4-3.4 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3l35.8 35.9 72.2-72.5c3.4-3.5 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3c7.1 7.1 7.1 18.7 0 25.8L638 541.7c-3.6 3.5-8.2 5.4-13 5.4zM625 721.8c-4.9 0-9.4-1.9-12.9-5.4l-48.6-48.8c-7.1-7.1-7.1-18.7 0-25.8 3.4-3.4 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3l35.8 35.9 72.2-72.5c3.4-3.5 8-5.3 12.9-5.3s9.4 1.9 12.9 5.3c7.1 7.1 7.1 18.7 0 25.8L638 716.4c-3.6 3.5-8.2 5.4-13 5.4z" fill="#6B400D" p-id="5313"></path>
                                    <path d="M853.5 371.4c0-62-50.4-112.4-112.4-112.4H179.5c-2.7 0-5.4 0.2-8.1 0.4l-1.1 0.1-0.3-1.1v-4.9c0-63.1 51.4-114.5 114.5-114.5h561.6c63.1 0 114.5 51.4 114.5 114.5v404.2c0 59.5-46.5 109.6-105.9 114.1l-1.1 0.1V371.4z" fill="#6B400D" p-id="5314"></path>
                                    <path d="M846.1 186.5H284.5c-36.9 0-67 30-67 67v4.5H741c62.6 0 113.5 50.9 113.5 113.5v352.3c32.9-4.2 58.5-32.1 58.5-66.1V253.5c0-37-30-67-66.9-67z" fill="#FFD524" p-id="5315"></path>
                                </svg>
                                <span>Withdraw records</span>
                            </div>

                            <div>
                                <svg t="1713179477381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8254" width="24">
                                    <path d="M609.28 512l-271.36 271.36 35.84 35.84 312.32-302.08L373.76 204.8l-35.84 35.84L609.28 512z" fill="#111111" p-id="8255"></path>
                                </svg>
                            </div>
                        </div>
                    </a>



                   
                        <div className="travel-cell-item">
                            <div>
                                <svg t="1726036524000" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10178" width="24">
                                    <path d="M960.3 496.4c0 63.8-51.7 115.5-115.3 115.5-8.2 0-16.4-0.9-24.1-2.6 19.5-42.3 30.2-89.4 30.2-138.9 0-22.1-2.2-43.8-6.3-64.7-1.6-8.2-3.5-16.1-5.7-24 1.9-0.3 4-0.3 6-0.3 63.5-0.1 115.2 51.3 115.2 115z" fill="#F75C3E" p-id="10180"></path>
                                    <path d="M224.8 595.4c0-1.8-0.2-3.3-0.5-4.5-0.5-2.1-1.1-3.3-1.4-4-0.1-0.3-0.2-0.4-0.3-0.6-0.1-0.1-0.1-0.1-0.1-0.2l-16.8 8.5 17.7-6.7c-0.5-1.3-0.8-1.9-0.8-1.9l-16.8 8.5 17.7-6.7L205 595l19.1-4.2c-0.3-1.2-0.5-2-0.8-2.7L205 595l19.1-4.2-19.3 4.2h19.7c0-1.6-0.2-3.1-0.5-4.2l-19.3 4.2h19.7c0-5.3-2.1-10.4-5.9-14.2l-0.1-0.1-14.1 14.2 18.6-7.4c-14.4-36.2-22.4-75.6-22.4-117.1 0-15.9 1.1-31.3 3.4-46.4l0.1-0.4c0.6-4.7 1.6-9.7 2.6-14.9l-19.6-3.8 19.6 4.1c0.7-3.4 1.4-6.5 2.2-9.7l0.2-0.9c0.7-3.6 1.8-7.5 2.9-11.7 18.3-66.7 58-124.6 111.3-165.8 26.6-20.6 56.7-37 89.1-48.3 32.4-11.3 67.2-17.4 103.5-17.4s71.2 6.1 103.6 17.4c48.6 16.9 91.9 45.4 126.4 82.2 34.5 36.8 60.2 82 73.9 132.1v0.1c2.1 7.5 3.9 14.9 5.4 22.5 3.9 19.7 5.9 40.1 5.9 60.9 0 46.6-10 90.8-28.3 130.5-0.5 1.1-0.9 2.3-1.2 3.4l13.8 3.5-13-5.7c-0.2 0.4-0.4 1-0.7 2.2l13.8 3.5-13-5.7 7.5 3.3-7.3-3.6s-0.1 0.1-0.1 0.3l7.5 3.3-7.3-3.6 1.2 0.6-1.2-0.6 1.2 0.6-1.2-0.6-0.1 0.1-0.3 0.7c-20 43.3-49.6 81.2-85.9 111.2-36.4 29.9-79.6 51.8-126.9 63.1h-0.1c-23.4 5.6-48 8.7-73.2 8.7-11 0-20 9-20 20s9 20 20 20c28.4 0 56.1-3.4 82.6-9.8h-0.1c53.5-12.6 102.2-37.4 143.2-71.1 41-33.7 74.2-76.5 96.8-125.3l-18.2-8.4 17.8 9.1c0.2-0.4 0.5-1 0.9-1.9 0.4-0.9 0.9-2.2 1.4-3.9l-19.4-4.9 18.2 8.4c20.7-44.9 32-94.9 32-147.3 0-23.4-2.3-46.4-6.7-68.5-1.7-8.7-3.7-17.1-6.1-25.5v0.1c-20.9-75.7-65.6-141-125.6-187.4-30-23.2-63.9-41.7-100.4-54.5-36.6-12.7-75.9-19.6-116.7-19.6s-80.1 6.9-116.7 19.6c-54.8 19.1-103.5 51.2-142.4 92.6-38.9 41.4-67.9 92.2-83.4 148.7-1.2 4.4-2.5 9.2-3.5 14.4l19.6 3.9-19.4-4.8c-1 3.9-1.8 7.5-2.5 11.1l-0.1 0.3c-1 5.3-2.1 11.1-3 17.3l19.8 2.6-19.8-3c-2.7 17.3-3.9 34.7-3.9 52.5 0 46.6 9 91.2 25.3 132 1 2.5 2.6 4.9 4.5 6.8l0.1 0.1 14.1-14.2h-20c0 1.7 0.2 3.1 0.5 4.3 0.5 2.1 1 3.3 1.4 4.1 0.3 0.6 0.4 0.8 0.4 0.9l16.9-8.6-17.7 6.7c0.5 1.3 0.8 1.8 0.8 1.9l16.9-8.6-17.7 6.7 18.4-6.9-19.2 4.2c0.3 1.2 0.6 2 0.8 2.7l18.4-6.9-19.2 4.2 19.3-4.3h-19.8c0 1.7 0.2 3.1 0.5 4.3l19.3-4.3h-19.8c0 11 9 20 20 20s20-8.9 20-20z" fill="#F75C3E" p-id="10181"></path>
                                    <path d="M553.4 845.9h-75.2c-22.4 0-40.5-18.1-40.5-40.5s18.1-40.5 40.5-40.5h75.2c22.4 0 40.5 18.1 40.5 40.5s-18.2 40.5-40.5 40.5zM71.4 486.6c0 63.8 51.7 115.5 115.3 115.5 8.2 0 16.4-0.9 24.1-2.6-19.5-42.3-30.2-89.4-30.2-138.9 0-22.1 2.2-43.8 6.3-64.7 1.6-8.2 3.5-16.1 5.7-24-1.9-0.3-4-0.3-6-0.3-63.6-0.1-115.2 51.3-115.2 115z" fill="#F75C3E" p-id="10182"></path>
                                </svg>
                                <span onClick={supportHandler}>Customer Service</span>
                            </div>

                            <div>
                                <svg t="1713179477381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8254" width="24">
                                    <path d="M609.28 512l-271.36 271.36 35.84 35.84 312.32-302.08L373.76 204.8l-35.84 35.84L609.28 512z" fill="#111111" p-id="8255"></path>
                                </svg>
                            </div>
                        </div>
                   



                    <a href="/">
                        <div className="travel-cell-item">
                            <div>
                                <svg t="1726036605184" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14040" width="24">
                                    <path d="M512 1024c-249.6 0-448-198.4-448-448 0-204.8 134.4-371.2 320-428.8l0 70.4C236.8 268.8 128 409.6 128 576c0 211.2 172.8 384 384 384s384-172.8 384-384c0-166.4-108.8-307.2-256-358.4L640 147.2c185.6 57.6 320 224 320 428.8C960 825.6 761.6 1024 512 1024zM544 512l-64 0C460.8 512 448 499.2 448 480l0-448C448 12.8 460.8 0 480 0l64 0C563.2 0 576 12.8 576 32l0 448C576 499.2 563.2 512 544 512z" fill="#AD3B3B" p-id="14041"></path>
                                </svg>
                                <span>Exit</span>
                            </div>

                            <div>
                                <svg t="1713179477381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8254" width="24">
                                    <path d="M609.28 512l-271.36 271.36 35.84 35.84 312.32-302.08L373.76 204.8l-35.84 35.84L609.28 512z" fill="#111111" p-id="8255"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </main>
            
        </>
    )
}

export default Me




// import React, { useState, useEffect } from 'react';

// const Me = () => {
//     const [amounts, setAmounts] = useState(null); // Initialize state as null for loading
//     const [error, setError] = useState(null); // State to handle errors
//     const [userPhone, setUserPhone] = useState('');
//     const phone = localStorage.getItem('userPhone');

//     useEffect(() => {
//         const phone = localStorage.getItem('userPhone');
//         if (phone) {
//             setUserPhone(phone)
//         }
//     }, [])


//     useEffect(() => {
//         console.log("Phone value: ", phone);
//         const fetchWallet = async () => {
//             try {
//                 const response = await fetch(`http://localhost:4000/wallet/${phone}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json', // If required
//                     },

//                 });
//                 console.log(response);

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch wallet data');
//                 }

//                 const data = await response.json();
//                 console.log(data); // Check if data is correct
//                 setAmounts(data.amount); // Update state with fetched amount
//             } catch (error) {
//                 console.error('Error fetching wallet data:', error);
//                 setError('Error fetching wallet data');
//             }
//         };

//         fetchWallet();
//     }, [phone]); // Trigger fetch when phone changes

//     if (error) {
//         return <p>{error}</p>; // Show error message if any
//     }

//     if (amounts === null) {
//         return <p>Loading...</p>; // Show loading state while fetching
//     }

//     return (
//         <div>
//             <h1>Wallet</h1>

//             <div className="cont-title">{userPhone}</div>
//             <p>Amount: ₹{amounts}</p> {/* Display the amount */}
//         </div>
//     );
// };

// export default Me;

