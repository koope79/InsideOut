import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './Projection.module.css';
import { dateField, typeField } from "../../validators/validators";

const ToolForm = (props) => {
    const submit = (values, { setSubmitting }) => {
        props.setSrcData(values);
        setSubmitting(false);
    }

    return (
        <Formik initialValues={{ dateMemory: '', typeMemory: '' }} onSubmit={submit}>
            {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.form_block}>
                        <div className={s.subTitle}>Дата воспоминания</div>
                        <div className={s.toolsProjection__toolBar}>
                            <Field type="text" name="dateMemory" validate={dateField} placeholder={'04/09/20'} />
                            {errors.dateMemory && touched.dateMemory && <div className={s.errorField}>{errors.dateMemory}</div>}
                        </div>
                    </div>
                    <div className={s.form_block}>
                        <div className={s.subTitle}>Тематика воспоминания</div>
                        <div className={s.toolsProjection__toolBar}>
                            <Field type="text" name="typeMemory" validate={typeField} placeholder={'Type here'} />
                            {errors.typeMemory && touched.typeMemory && <div className={s.errorField}>{errors.typeMemory}</div>}
                        </div>
                    </div>
                    <div className={s.toolsProjection__button}>
                        <button type="submit" disabled={isValid ? isSubmitting : "disabled"}>Поиск</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default ToolForm;