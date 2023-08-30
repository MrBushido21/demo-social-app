import { Field, Form, withFormik } from "formik";

function TextAreaFormik(props) {
return (
    <Form>
        <Field
          as="textarea"
          name="textarea"
          placeholder="Type text.."
          value={props.values.textarea}
          onChange={props.handleChange}
        />
        <button>Submit</button>
    </Form>
);
}

const TextAreaContainer = withFormik({
  mapPropsToValues: () => ({textarea: ""}),
  handleSubmit: (values, {props}) => {
    props.addNewMessageActionCreater(values.textarea)
    values.textarea = ""
  }
})(TextAreaFormik)

function FormTextArea(props) {
return (
    <TextAreaContainer {...props} />
);
}
export default FormTextArea;