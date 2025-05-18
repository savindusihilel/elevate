import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './notification.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import NavBar from '../../Components/NavBar/NavBar';
function NotificationsPage() {
  // State to hold all notifications for the logged-in user
  const [notifications, setNotifications] = useState([]);
  // Fetch user ID from local storage (should be set during login)
  const userId = localStorage.getItem('userID');

  // Fetch notifications from the backend when the component mounts or userId changes
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/notifications/${userId}`);
        console.log('API Response:', response.data); 
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    if (userId) {
      fetchNotifications();// Only fetch if userId exists
    } else {
      console.error('User ID is not available');
    }
  }, [userId]);
// Handler to mark a specific notification as read
  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:8080/notifications/${id}/markAsRead`);
      // Update local state to reflect that this notification is now read
      setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };
  // Handler to delete a specific notification
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/notifications/${id}`);
      // Remove the deleted notification from state
      setNotifications(notifications.filter((n) => n.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <NavBar/>
    <div className="noty-container">
      <div className="noty-header">
        <h1>Notifications</h1>
      </div>
      
      <div className="noty-list">
        {notifications.length === 0 ? (
          <div className="noty-empty">
            <p>No notifications found.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`noty-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="noty-content">
                <p className="noty-message">{notification.message}</p>
                <p className="noty-date">{formatDate(notification.createdAt)}</p>
              </div>
              
              <div className="noty-actions">
                {!notification.read && (
                  <button
                    className="noty-read-btn"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    <IoMdCheckmarkCircleOutline /> 
                  </button>
                )}
                <button
                  className="noty-delete-btn"
                  onClick={() => handleDelete(notification.id)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}


export default NotificationsPage;