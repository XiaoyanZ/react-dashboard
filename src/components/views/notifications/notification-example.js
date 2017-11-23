import React, { Component } from 'react';
import { Rail, Segment } from 'semantic-ui-react';
import Radium from 'radium';
import { ToastContainer, toast } from 'react-toastify';


import NotificationForm from './notification-form';

const styles = {
    sidebar_show: {
      margin: '0 150px 0 0',
    },
    sidebar_hidden: {
      margin: '0 0 0 0',
    }
  }


class NotificationExample extends Component {

    constructor(props){
        super(props);
        this.handleShowToast = this.handleShowToast.bind(this);
    }

    handleShowToast = (state) => {
        let autoClose = state.autoClose? state.delay: state.autoClose;

        toast("I'm here!", {
            type: state.type,
            position: state.position,
            autoClose: autoClose, 
            hideProgressBar: state.hideProgressBar,
            closeOnClick: state.closeOnClick,
            pauseOnHover: state.pauseOnHover,
            newestOnTop: state.newestOnTop,
        });
    }

    notify = () => toast("Wow so easy !");

    render(){
        return(
            <div>
                <NotificationForm onShowToast={this.handleShowToast}/>
                {/* <ToastContainer style={this.props.navVisible? styles.sidebar_show : styles.sidebar_hidden} /> */}
                <ToastContainer />
            </div>
        );
    }

}

export default Radium(NotificationExample);