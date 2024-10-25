import { ChartComponent } from "./components/chart";
import { MainLayout } from "./components/layout";
import "./App.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const cards = [
  {
    name: "Naira Card",
    account: "*****68584",
    status: "Locked",
    balance: "5,500 NGN",
    image: "/images/File type.png",
  },
  {
    name: "Dollar Card",
    account: "*****68584",
    status: "Active",
    balance: "5,500 USD",
    image: "/images/File type (1).png",
  },
  {
    name: "Dollar Card",
    account: "*****68584",
    status: "Locked",
    balance: "5,500 USD",
    image: "/images/File type.png",
  },
  {
    name: "Dollar Card",
    account: "*****68584",
    status: "Active",
    balance: "5,500 USD",
    image: "/images/File type (1).png",
  },
  {
    name: "Dollar Card",
    account: "*****68584",
    status: "Active",
    balance: "5,500 USD",
    image: "/images/File type (1).png",
  },
];

const activities = [
  {
    activity: "Bill payment for",
    name: "MTN Airtime",
    amount: "+ 5,500 NGN",
    image: "/images/Service Provider 32px.png",
  },
  {
    activity: "Payment to bank ",
    name: "Oluwatobi Oseni",
    amount: "+ 5,500 NGN",
    image: "/images/Banks.png",
  },
  {
    activity: "Payment to bank ",
    name: "Oluwatobi Oseni",
    amount: "+ 5,500 NGN",
    image: "/images/Transaction States.png",
  },
  {
    activity: "Payment to bank ",
    name: "Oluwatobi Oseni",
    amount: "+ 5,500 NGN",
    image: "/images/Transaction States (1).png",
  },
];

function App() {
  const data = useSelector((state: RootState) => state.form);
  return (
    <MainLayout>
      <div className="main-content">
        <div className="header">
          <h2>{`Good Afternoon, ${data?.businessName || "Payshiga"}  `}</h2>
          <p>Monday, January 23, 2023</p>
        </div>
        <div className="hero">
          <div className="currency-stats">
            <div className="currency-toggle">
              <span className="first-currency">NGN</span>
              <span>GBP</span>
              <span>USD</span>
              <span>CAD</span>
            </div>
            <div className="action-buttons">
              <button className="add-money-btn">Add Money</button>
              <button className="send-money-btn">Send Money</button>
              <BsThreeDotsVertical size={40} className="action-button-icon" />
            </div>
          </div>
          <div className="financial-stats">
            <div className="stat">
              <p>Available Balance</p>
              <h3>NGN 1,000,000</h3>
              <div className="trend-flex">
                <img src="/images/Trend Arrows.png" alt="" />
                <p className="stat-change">+20% Past Day</p>
              </div>
            </div>
            <div className="stat">
              <p>Total Transactions</p>
              <h3>345</h3>
              <div className="trend-flex">
                <img src="/images/Trend Arrows.png" alt="" />
                <p className="stat-change">+20% Past Day</p>
              </div>
            </div>
            <div className="stat">
              <p>Total Settlements</p>
              <h3>NGN 49,000,000</h3>
              <div className="trend-flex">
                <img src="/images/Trend Arrows.png" alt="" />
                <p className="stat-change">+20% Past Day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="desc-buttons">
            <button className="money-in">Money In</button>
            <button className="money-out">Money Out</button>
          </div>
          <div>
            <select name="" id="" className="select-date">
              <option value="30days">Last 30 days</option>
            </select>
          </div>
        </div>
        <div className="chart-section">
          <ChartComponent />
        </div>
        <div className="cards-activities">
          <div className="card-width">
            <div className="cards">
              <h2>Cards</h2>
              <div>
                {cards.map((card, index) => (
                  <div className="card-list" key={index}>
                    <div className="card-image-flex">
                      <img src={card.image} alt={card.name} />
                      <div>
                        <p>{card.name} </p>
                        <p className="card-list-account">{card.account} </p>
                      </div>
                    </div>
                    <p
                      className={
                        card?.status === "Active"
                          ? "card-status active"
                          : "card-status locked"
                      }
                    >
                      {card.status}
                    </p>
                    <p>{card.balance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card-width">
            <div className="cards">
              <h2>Recent Activities</h2>
              <div>
                {activities.map((activity, index) => (
                  <div className="card-list activity" key={index}>
                    <div className="card-image-flex">
                      <img src={activity.image} alt={activity.activity} />
                      <div>
                        <p className="card-list-account">
                          {activity.activity}{" "}
                        </p>
                        <p>{activity.name} </p>
                      </div>
                    </div>
                    <p className="activity-amount">{activity.amount} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
