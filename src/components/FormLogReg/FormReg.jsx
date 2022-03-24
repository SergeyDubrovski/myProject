import React from "react";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { Field, Form, reduxForm, reset } from "redux-form";
import { requiredField, maxLengthCreator } from "../validators/validatorForm";
import { MyForm, MyFormSelect } from "../UI/MyForms/MyForm";


const maxlength10 = maxLengthCreator(10, 0);
const maxMinLength10 = maxLengthCreator(10, 4);
const FormReg = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log(e);
    dispatch(reset("login"));
  };
  return (
    <div>
      <FormR onSubmit={onSubmit} />
    </div>
  );
};

let FormR = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">login</label>
        <Field 
          name="login"
          type="text"
          component={MyForm}
          placeholder="your login"
          validate={[requiredField, maxlength10]}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <Field
          name="email"
          type="email"
          component={MyForm} 
          placeholder="your email"
          validate={[requiredField]}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <Field
          name="password"
          type="password"
          component={MyForm} 
          placeholder="your password"
          validate={[requiredField, maxMinLength10]}
        />
      </div>
      <div>
        <label htmlFor="password">confirm password</label>
        <Field
          name="cpassword"
          type="password"
          component={MyForm} 
          placeholder="confirm password"
          validate={[requiredField, maxMinLength10]}
        />
      </div>
      <Field name="privilege" component={MyFormSelect} validate={[requiredField]}>
        <option>choice</option>
        <option>admin</option>
        <option>user</option>
        <option>guest</option>
      </Field>
      <div>
        <label htmlFor="check">I Agree</label>
        <Field
          name="check"
          component="input"
          type="checkbox"
          validate={[requiredField]}
        />
      </div>
      <div>
        <label htmlFor="textarea">message</label>
        <Field
          name="message"
          component="textarea"
          type="textarea"
          placeholder="1...50 simbols"
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

FormR = reduxForm({
  form: "login",
})(FormR);
const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(FormReg);
