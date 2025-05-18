//This class is a plain Java object used to model a comment
package backend.model;
//// Represents a user comment in the system (e.g., for a post or notification)
public class Comment {
    private String id;
    private String userID;
    private String userFullName;
    private String content;

    //// Getter for comment ID
    public String getId() {
        return id;
    }

     // Setter for comment ID
    public void setId(String id) {
        this.id = id;
    }
// Getter for user ID
    public String getUserID() {
        return userID;
    }
 // Setter for user ID
    public void setUserID(String userID) {
        this.userID = userID;
    }
 // Getter for user's full name
    public String getUserFullName() {
        return userFullName;
    }
// Setter for user's full name
    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }
// Getter for comment content
    public String getContent() {
        return content;
    }
 // Setter for comment content
    public void setContent(String content) {
        this.content = content;
    }
}
