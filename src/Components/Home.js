import React from "react";
import {useState} from 'react';

function Home() {
  const [message, setMessage] = useState('');
    const handleChange = (event) => {
      setMessage(event.target.value);
      };

    const [food, setFood] = useState('');
    const foodChange = (event) => {
      setFood(event.target.value);
      };
  if(localStorage.getItem("sanskarProf").replace(/"/g, "") == 'Central') {
    return (
    <>
      <h1>Login {localStorage.getItem("sanskarProf").replace(/"/g, "")}</h1>
      <h2>Transaction to state govt</h2>
      <br></br>
      <div className="food-item">
      <label>Choose your Food item&nbsp;</label>
          <br></br>
          <select onChange={foodChange}>
            <option>Select</option>
            <option value="Wheat">Wheat(Rs. 6/kg)</option>
            <option value="Rice">Rice(Rs. 7/kg)</option>
          </select>
      </div>
      <br></br>
      <div className="quantity">
          <label>Enter Quantity in kg&nbsp;</label>
          <br></br>
          <input
                  type="text"
                  className="quantity"
                  placeholder="Enter Qty"
                  onChange={handleChange}
                  value={message}
          />
      </div>
      <br></br>
      <div className="price">
          <label>Price is:&nbsp;</label>
          <br></br>
          {(food == 'Rice') ? `Rs. ${message * 7}` : (food == 'Wheat') ? `Rs. ${message * 6}` : ''}
      </div>
      </>
      );
  } else if(localStorage.getItem("sanskarProf").replace(/"/g, "") == 'State') {
      return (
      <>
        <h1>Login {localStorage.getItem("sanskarProf").replace(/"/g, "")}</h1>
        <h2>Transaction to district</h2>
        <br></br>
      <div className="food-item">
          <label>Choose your Food item&nbsp;</label>
          <br></br>
          <select onChange={foodChange}>
            <option>Select</option>
            <option value="Wheat">Wheat(Rs. 6/kg)</option>
            <option value="Rice">Rice(Rs. 7/kg)</option>
          </select>
      </div>
      <br></br>
      <div className="quantity">
          <label>Enter Quantity in kg&nbsp;</label>
          <br></br>
          <input
                  type="text"
                  className="quantity"
                  placeholder="Enter Qty"
                  onChange={handleChange}
                  value={message}
          />
      </div>
      <br></br>
      <div className="price">
          <label>Price is:&nbsp;</label>
          <br></br>
          {(food == 'Rice') ? `Rs. ${message * 7}` : (food == 'Wheat') ? `Rs. ${message * 6}` : ''}
      </div>
      </>
      );
  } else if(localStorage.getItem("sanskarProf").replace(/"/g, "") == 'District') {
    return (
    <>
      <h1>Login {localStorage.getItem("sanskarProf").replace(/"/g, "")}</h1>
      <h2>Transaction to ration shops</h2>
      <br></br>
      <div className="food-item">
      <label>Choose your Food item&nbsp;</label>
          <br></br>
          <select onChange={foodChange}>
            <option>Select</option>
            <option value="Wheat">Wheat(Rs. 6/kg)</option>
            <option value="Rice">Rice(Rs. 7/kg)</option>
          </select>
      </div>
      <br></br>
      <div className="quantity">
          <label>Enter Quantity in kg&nbsp;</label>
          <br></br>
          <input
                  type="text"
                  className="quantity"
                  placeholder="Enter Qty"
                  onChange={handleChange}
                  value={message}
          />
      </div>
      <br></br>
      <div className="price">
          <label>Price is:&nbsp;</label>
          <br></br>
          {(food == 'Rice') ? `Rs. ${message * 7}` : (food == 'Wheat') ? `Rs. ${message * 6}` : ''}
      </div>
      </>
      );
  } else if(localStorage.getItem("sanskarProf").replace(/"/g, "") == 'RationShop') {
    return (
    <>
      <h1>Login {localStorage.getItem("sanskarProf").replace(/"/g, "")}</h1>
      <h2>Transaction to customer</h2>
      <br></br>
      <div className="food-item">
      <label>Choose your Food item&nbsp;</label>
          <br></br>
          <select onChange={foodChange}>
            <option>Select</option>
            <option value="Wheat">Wheat(Rs. 6/kg)</option>
            <option value="Rice">Rice(Rs. 7/kg)</option>
          </select>
      </div>
      <br></br>
      <div className="quantity">
          <label>Enter Quantity in kg&nbsp;</label>
          <br></br>
          <input
                  type="text"
                  className="quantity"
                  placeholder="Enter Qty"
                  onChange={handleChange}
                  value={message}
          />
      </div>
      <br></br>
      <div className="price">
          <label>Price is:&nbsp;</label>
          <br></br>
          {(food == 'Rice') ? `Rs. ${message * 7}` : (food == 'Wheat') ? `Rs. ${message * 6}` : ''}
      </div>
      </>
      );
  } else if(localStorage.getItem("sanskarProf").replace(/"/g, "") == 'Customer') {
    return (
    <>
      <h1>Login {localStorage.getItem("sanskarProf").replace(/"/g, "")}</h1>
      <h2>End of Transaction</h2>
    </>
    );
  }
}

export default Home;