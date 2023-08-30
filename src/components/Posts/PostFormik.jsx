import { Field, Form, withFormik } from "formik";

function postError(value) {
    if(!value || value.length > 30) {
        return "Введіть текст не більше 30 символів!"
    } 
}

function PostForm(props) {
return (
    <Form className="form-post">
        <Field 
            as="textarea"
            name="textarea"
            placeholder="Type.."
            value={props.values.textarea}
            onChange={props.handleChange}
            validate={postError}
            className={props.errors.textarea && props.touched.textarea ? "errors" : ""}
        />
        {props.errors.textarea && props.touched.textarea && (
            <div className="erorr-message">{props.errors.textarea}</div>
        )}
        <button className={`postBtn ${props.errors.textarea && props.touched.textarea ? "errors" : ""}`}
        >
            Send
        </button>
    </Form>
);
}

const PostFormContainer = withFormik({
    mapPropsToValues: () => ({textarea: ""}),
    handleSubmit: (values, {props}) => {
        props.renderPostActionCreater(values.textarea);
        values.textarea = ""
    }
})(PostForm)

function PostFormik(props) {
return (
    <PostFormContainer {...props}/>
);
}
export default PostFormik;