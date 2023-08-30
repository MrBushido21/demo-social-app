import User from '../User/User'
import PostsContainer from '../Posts/PostsContainer';
import backg from '../../img/header-img.png'

function Profile(props) {
    let headerImg = () => { 
         return props.profile && props.profile.photos.large
         ? <img src={props.profile.photos.large} alt="" />
         : <img src={backg} style={{maxHeight: 300, width: "100%", backgroundSize: "contain"}} alt="" /> 
    }

    return (
        <>
            <div>{headerImg()}</div>           
            <User {...props} />
            <PostsContainer />
        </>
    );
}
export default Profile;