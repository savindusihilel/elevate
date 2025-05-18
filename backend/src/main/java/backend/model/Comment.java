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

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getUserFullName() {
        return userFullName;
    }

    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
