import './App.css'
// import { BrowserRouter as createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from './Context';
import { Routes, Route } from 'react-router-dom';
import First from './Components/First'
import One from './Components/Context_API/One'
import UseReducer from './Components/UseReducer';
import Home from './Components/Home'
import Order from './Components/Order'
import VIP from './Components/VIP'
import Team from './Components/Team'
import Me from './Components/Me'
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Authenticator from "./Components/Authenticator"
import { isTokenExpired } from './helper';
import GoodsDetail from './Components/GoodsDetail1';
import GoodsDetail2 from './Components/GoodsDetail2';
import GoodsDetail3 from './Components/GoodsDetail3';
import GoodsDetail4 from './Components/GoodsDetail4';
import GoodsDetail5 from './Components/GoodsDetail5';
import GoodsDetail6 from './Components/GoodsDetail6';
import GoodsDetail7 from './Components/GoodsDetail7';
import GoodsDetail8 from './Components/GoodsDetail8';
import GoodsDetail9 from './Components/GoodsDetail9';
import Recharge from './Components/Recharge'
import Withdraw from './Components/Withdrawal';
import BankForm from './Components/BankForm';
import ForgotPassword from './Components/ForgotPassword';
import Payment from './Components/Payment';
import EventProduct from './Components/EventProduct';
import GoodDetail10 from './Components/GoodDetail10';
import GoodDetail11 from './Components/GoodDetail11';
import Purchase from './Components/Purchase';
import Support from './Components/Support';





function App() {

  // Define Context
  const investSection = [
    {
      vipName: "VIP1",
      vipPrice: 500,
      vipDays: 35,
      dayIncome: 30.00,
      totalIncome: 1050,
    },
    {
      vipName: "VIP2",
      vipPrice: 1600,
      vipDays: 35,
      dayIncome: 64.00,
      totalIncome: 2240,
    },
    {
      vipName: "VIP3",
      vipPrice: 2600,
      vipDays: 33,
      dayIncome: 110.00,
      totalIncome: 3630,
    },
    {
      vipName: "VIP4",
      vipPrice: 5200,
      vipDays: 40,
      dayIncome: 185.00,
      totalIncome: 7400,
    },
    {
      vipName: "VIP5",
      vipPrice: 9300,
      vipDays: 50,
      dayIncome: 301.00,
      totalIncome: 15000,
    },
    {
      vipName: "VIP6",
      vipPrice: 14352,
      vipDays: 50,
      dayIncome: 430.00,
      totalIncome: 21528,
    },
    {
      vipName: "VIP7",
      vipPrice: 18590,
      vipDays: 56,
      dayIncome: 453.00,
      totalIncome: 25368,
    },
    {
      vipName: "VIP8",
      vipPrice: 22000,
      vipDays: 27,
      dayIncome: 1200.00,
      totalIncome: 32400,
    },
    {
      vipName: "VIP9",
      vipPrice: 45000,
      vipDays: 33,
      dayIncome: 2200.00,
      totalIncome: 72600,
    },
    {
      events: [{
        vipName: "VIP1",
        vipPrice: 5000,
        vipDays: 17,
        dayIncome: 500.00,
        totalIncome: 8500,
      },
      {
        vipName: "VIP2",
        vipPrice: 8000,
        vipDays: 20,
        dayIncome: 630.00,
        totalIncome: 12600,
      }

      ]
    }
  ]
  ///console.log(investSection);





  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // setIsAuthenticated(true);
      if (isTokenExpired(token)) {
        // Token is expired, remove it from localStorage and redirect to login
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        alert("Your Session is Logout")
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  return (
    <>

      <AppContext.Provider value={investSection} >
        {/* {showNavbar && <Navbar />} */}
        {/* <Navbar /> */}
        {isAuthenticated && <Navbar />}
        <Routes>
          {/* Define the application routes */}
          <Route path="/auth" element={<Authenticator setIsAuthenticated={setIsAuthenticated} />} />


          {/* <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} /> */}

          {
            isAuthenticated ? (
              <>
                <Route path='/' element={< Home />} />
                <Route path='/vip' element={< VIP />} />
                <Route path='/my' element={< Me />} />
                <Route path='/team' element={< Team />} />
                <Route path='/order' element={< Order />} />
                <Route path='/gooddetail1' element={< GoodsDetail />} />
                <Route path='/gooddetail2' element={< GoodsDetail2 />} />
                <Route path='/gooddetail3' element={< GoodsDetail3 />} />
                <Route path='/gooddetail4' element={< GoodsDetail4 />} />
                <Route path='/gooddetail5' element={< GoodsDetail5 />} />
                <Route path='/gooddetail6' element={< GoodsDetail6 />} />
                <Route path='/gooddetail7' element={< GoodsDetail7 />} />
                <Route path='/gooddetail8' element={< GoodsDetail8 />} />
                <Route path='/gooddetail9' element={< GoodsDetail9 />} />
                <Route path='/events-page1' element={< GoodDetail10 />} />
                <Route path='/gooddetail11' element={< GoodDetail11 />} />
                <Route path='/recharge' element={< Recharge />} />
                <Route path='/withdraw' element={< Withdraw />} />
                <Route path='/addBank' element={< BankForm />} />
                <Route path='/forgotPassword' element={< ForgotPassword />} />
                <Route path='/payment' element={< Payment />} />
                <Route path='/events' element={< EventProduct />} />
                <Route path='/purchase' element={< Purchase />} />
                <Route path='/support' element={< Support />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate to="/auth" />} />
              </>
            )
          }


        </Routes>




      </AppContext.Provider>
    </>
  )
}
export default App









