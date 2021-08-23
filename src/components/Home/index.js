import React from 'react';
import Admin from '../Admin';
import Login from '../Login';
import SalesExecutive from '../SalesExecutive';
import { connect } from 'react-redux';

const Home = ({loginStatus, adminLogin, salesLogin}) => {
    console.log(loginStatus)
    return (
        <div>
            {adminLogin === true && loginStatus === true && <Admin />}
            {salesLogin === true && loginStatus === true && <SalesExecutive />}
            {loginStatus === false && <Login />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    loginStatus : state.loginStatus,
    adminLogin : state.adminLogin,
    salesLogin : state.salesLogin
})

export default connect(mapStateToProps,null)(Home);