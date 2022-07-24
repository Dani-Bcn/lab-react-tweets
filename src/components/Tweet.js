import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";  
import Actions from "./Actions"

function Tweet(props) {

  let message=props.tweetsArray.message
  let name=props.tweetsArray.user.name
  let timestamp=props.tweetsArray.timestamp
  let image =props.tweetsArray.user.image
  let handle = props.tweetsArray.user.handle
    
  return (     
    <div className="tweet">
      <ProfileImage image={image}/>
      <div className="body">
        <div className="top">
          <User name={name} handle={handle}></User>
          <Timestamp timestamp={timestamp}/>
        </div>  
        <Message message={message}/>
        <Actions></Actions>
        <i className="fas fa-ellipsis-h"></i>      
      </div>
    </div>
  );
}

export default Tweet;
