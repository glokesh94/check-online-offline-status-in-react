import React from 'react';
import { toast } from 'react-toastify';

const NetStatusNotification = (isOnline, message) => {
    if(isOnline){
        toast.success(message, {
            position: "bottom-center", autoClose: 4000, hideProgressBar: false,
            closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
        });
    }
    else{
        toast.error(message, {
            position: "bottom-center", autoClose: 4000, hideProgressBar: false,
            closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
        });
    }
}

const NetworkStatus = () => {
    window.addEventListener("load", () => {
        // 1st, we set the correct status when the page loads
        navigator.onLine
          ? NetStatusNotification(true, "You are online")
          : NetStatusNotification(false, "You are offline");
    
        // now we listen for network status changes
        window.addEventListener("online", () => {
          NetStatusNotification(true, "You are online !!");
        });
    
        window.addEventListener("offline", () => {
          NetStatusNotification(false, "You are offline !!");
        });
      });
    
      return <div></div>;
}

export default NetworkStatus;