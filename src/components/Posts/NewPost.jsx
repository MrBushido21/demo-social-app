import ava from '../../img/ava.jpg'

function NewPost(props) {
    return (
        <div key={props.id} className='new-post'>
            <div className='new-post__img'>
                <img src={ava} width={50} height={50} style={{ borderRadius: "50 px" }} />
            </div>
            <div className="new-post__text">{props.name}{props.message}</div>
        </div>
    );
}

export default NewPost