import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from '../layout/MetaData.js';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAdminProduct } from '../../actions/productAction.js';
import { Doughnut, Line } from "react-chartjs-2";
import 'chart.js/auto';
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products = [] } = useSelector((state) => state.products);
  const { orders = [] } = useSelector((state) => state.allOrders);
  const { users = [] } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock += 1;
    }
  });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = orders.reduce((acc, item) => acc + item.totalPrice, 0);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["crimson"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className='dashboard'>
      <MetaData title="Shopie. || Dashboard-Admin Panel" />
      <Sidebar />
      <div className='dashboardContainer'>
        <Typography component="h1">Dashboard</Typography>
        <div className='dashboardSummary'>
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className='dashboardSummaryBox2'>
            <Link to="/admin/products">
              <p>Products</p>
              <p>{products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users.length}</p>
            </Link>
          </div>
        </div>

        <div className='lineChart'>
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
