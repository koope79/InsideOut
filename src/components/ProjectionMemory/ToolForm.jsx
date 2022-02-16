import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './Projection.module.css';
import sg from '../common/GeneralStyles.module.css';
import { dateField, typeField } from "../../validators/validators";
import classnames from 'classnames';

const ToolForm = ({setDataMemoryTh, sizeButton}) => {
    const submit = (values, { setSubmitting, resetForm }) => {
        setDataMemoryTh(values);
        setSubmitting(false);
        resetForm();
    }

    return (
        <Formik initialValues={{ dateMemory: '', typeMemory: '' }} validateOnMount={true} onSubmit={submit}>
            {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.form_block}>
                        <div className={sg.subTitle}>Дата</div>
                        <div className={s.toolsProjection__toolBar}>
                            <Field type="text" name="dateMemory" validate={dateField} placeholder={'04/09/20'} />
                            {errors.dateMemory && touched.dateMemory && <div className={sg.errorField}>{errors.dateMemory}</div>}
                        </div>
                    </div>
                    <div className={s.form_block}>
                        <div className={sg.subTitle}>Тематика</div>
                        <div className={s.toolsProjection__toolBar}>
                            <Field type="text" name="typeMemory" validate={typeField} placeholder={'Type here'} />
                            {errors.typeMemory && touched.typeMemory && <div className={sg.errorField}>{errors.typeMemory}</div>}
                        </div>
                    </div>
                    <div className={classnames( {[sg.middleFormButton]: sizeButton == "middle"}, {[sg.form__button]: !sizeButton}  )} >
                        <button name="searchButton" type="submit" disabled={isValid ? isSubmitting : "disabled"}>Поиск</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ToolForm;