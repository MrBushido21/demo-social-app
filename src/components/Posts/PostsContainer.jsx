import { renderPostActionCreater} from '../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newTextPost: state.profilePage.newTextPost
    }
}
let mapDispatchToProps = ({
    renderPostActionCreater
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer