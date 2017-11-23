import React, { Component } from 'react';

import CardContainer from './card-container';
import NotificationeExample from '../views/notifications/notification-example';

const NotificationExampleCard = CardContainer(NotificationeExample,'Notification Example');

class NotificationsContainer extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <NotificationExampleCard {...this.props}/>
            </div>
        );
    }
}

export default NotificationsContainer;