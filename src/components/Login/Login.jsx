import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './Login.module.css';
import sg from '../common/GeneralStyles.module.css';
import { maxLength, requiredField } from "../../validators/validators";
import classnames from 'classnames';
import { connect } from 'react-redux';
import { setUserData } from "../../redux/Auth-reducer";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const maxLength8 = maxLength(8);

const LoginForm = ({setUserData}) => {
    const submit = (values, { setSubmitting }) => {
        setUserData(values.login, values.pass, true);
        setSubmitting(false);
    }

    return (
        <Formik initialValues={{ login: '', pass: '' }} validateOnMount={true} onSubmit={submit}>
            {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.form_block}>
                        <div className={sg.subTitle}>Логин:</div>
                        <div className={sg.form__toolBar}>
                            <Field type="text" name="login" validate={requiredField} placeholder={'login'} />
                            {errors.login && touched.login && <div className={sg.errorField}>{errors.login}</div>}
                        </div>
                    </div>
                    <div className={s.form_block}>
                        <div className={sg.subTitle}>Пароль:</div>
                        <div className={sg.form__toolBar}>
                            <Field type="password" name="pass" validate={maxLength8} placeholder={'password'} />
                            {errors.pass && touched.pass && <div className={sg.errorField}>{errors.pass}</div>}
                        </div>
                    </div>
                    <div className={classnames(sg.form__button, s.form_block) }>
                        <button type="submit" disabled={isValid ? isSubmitting : "disabled"}>Вход</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

const Login = (props) => {
    const navigate = useNavigate();
    let {state} = useLocation();
    if(state == null) state="/projection";
    
    if (props.isAuth) {
        // navigate(state.path || "/projection");
        return <Navigate to={state.path || state} />    
    }
    return (
        <div className={s.login}>
            <div className={sg.title}>Аутентификация</div>
            <div className={s.loginForm}>
                <LoginForm setUserData={props.setUserData}/>
            </div>
        </div>
    );
}

const mapToStateToProps = (state) => {
    return {    
        isAuth: state.auth.isAuth
    }
}


export default connect(mapToStateToProps, { setUserData })(Login);;