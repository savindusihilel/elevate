package backend.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notifications")

//This class represents a notification document in the MongoDB "notifications" collection
public class NotificationModel {
    // Unique identifier for the notification (automatically generated)
    @Id
    @GeneratedValue
    private String id;  
    private String userId;
    private String message; 
    private boolean read; 
    private String createdAt; 

    // Default constructor required by Spring and MongoDB
    public NotificationModel() {}

   // Constructor to initialize a notification with all fields (except ID)
    public NotificationModel(String userId, String message, boolean read, String createdAt) {
        this.userId = userId;
        this.message = message;
        this.read = read;
        this.createdAt = createdAt;
    }
    // Getter for ID
    public String getId() {
        return id;
    }
    // Setter for ID
    public void setId(String id) {
        this.id = id;
    }
     // Getter for user ID
    public String getUserId() {
        return userId;
    }
  // Setter for user ID
    public void setUserId(String userId) {
        this.userId = userId;
    }
    // Getter for notification message
    public String getMessage() {
        return message;
    }
  // Setter for notification message
    public void setMessage(String message) {
        this.message = message;
    }
// Getter to check if the notification is read
    public boolean isRead() {
        return read;
    }

    public void setRead(boolean read) {
        this.read = read;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

