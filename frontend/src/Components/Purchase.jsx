import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Purchase.css'; // Styling for better UI
//import styles from './Purchase.module.css'; // Styling for better UI

function Purchase() {
    const [purchases, setPurchases] = useState([]);
    const navigate = useNavigate();

    // Fetch confirmed purchases
    useEffect(() => {
        fetch('https://tataearning.onrender.com/purchases')
            .then((response) => response.json())
            .then((data) => {
                setPurchases(data);
            })
            .catch((error) => {
                console.error('Error fetching purchases:', error);
            });
    }, []);

    // Go back to the previous page
    // const goBack = () => {
    //     navigate(-1);
    // };

    return (
        <div className={styles.purchaseContainer}>
            {/* Back Arrow and Header */}
            {/* <div className={styles.header}>
                <button className={styles.backarrow} onClick={goBack}>
                    ←
                </button>
                <h2 className={styles.heading}>Confirmed Purchases</h2>
            </div> */}

            <div className={styles.content}>
                {purchases.length > 0 ? (
                    <div className={styles.purchaselist}>
                        {purchases.map((purchase) => (
                            <div key={purchase._id} className={styles.purchaseitem}>
                                <div className={styles.columnView}>
                                    <div className={styles.field}>
                                        <strong>Status</strong>
                                        <div style={{color: "green"}}>{purchase.status}</div>
                                    {/* </div> */}
                                    {/* <div className={styles.field}> */}
                                        <strong>Amount</strong>
                                        <div style={{color: "green", fontSize: "1.5rem"}}>₹{purchase.amount}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.noData}>No confirmed purchases available</p>
                )}
            </div>


            {/* Content */}
            {/* <div className={styles.content}>
                    {purchases.length > 0 ? (
                        <ul className={styles.purchaselist}>
                            {purchases.map((purchase) => (
                                <li key={purchase._id} className={styles.purchaseitem}>
                                    <div className={styles.columnView}>
                                        <div className={styles.field}>
                                            <strong>Status</strong>
                                            <div>{purchase.status}</div>
                                        </div>
                                        <div className={styles.field}>
                                            <strong>Amount</strong>
                                            <div>₹{purchase.amount}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-data">No confirmed purchases available.</p>
                    )}
                </div> */}

        </div>
    );
}

export default Purchase;
