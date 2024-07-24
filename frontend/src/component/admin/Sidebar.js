import React from 'react';
import './Sidebar.css';
import logo from '../../images/logoShopie.png';
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PeopleIcon from '@mui/icons-material/People';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/" className='sidebar-logo'>
        <img src={logo} alt="Shopie" />
      </Link>
      <Link to="/admin/dashboard" className='sidebar-link'>
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="products-content"
          id="products-header"
        >
          <p>Products</p>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/admin/products" className='sidebar-link'>
            <p>
              <PostAddIcon /> All
            </p>
          </Link>
          <Link to="/admin/product" className='sidebar-link'>
            <p>
              <AddIcon /> Create
            </p>
          </Link>
        </AccordionDetails>
      </Accordion>

      <Link to="/admin/orders" className='sidebar-link'>
        <p>
          <ListAltIcon /> Orders
        </p>
      </Link>
      <Link to="/admin/users" className='sidebar-link'>
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews" className='sidebar-link'>
        <p>
          <RateReviewIcon /> Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;