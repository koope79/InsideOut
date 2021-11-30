import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import sg from '../../common/GeneralStyles.module.css';
import s from './Sort.module.css';
import { dateField, ratingField, requiredField, typeField } from "../../../validators/validators.js";

const SortForm = ({ }) => {

    const submit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm();
    }

    return (
        <Formik initialValues={{ dateFrom: '', dateTo: '', type: '', ratingFrom: '', ratingTo: '' }} validateOnMount={true} onSubmit={submit}>
            {({ errors, touched, isValid = false, isSubmitting }) => (
                <Form>
                    <div className={sg.formBlockItem}>
                        <div className={sg.subTitle}>Дата воспоминания</div>
                        <div className={s.sortForm__toolBar}>
                            <div className={s.sortForm__toolGroup}>
                                <Field type="text" name="dateFrom" validate={dateField} placeholder={'от'} />
                                <span>/</span>
                                <Field type="text" name="dateTo" validate={dateField} placeholder={'до'} />
                            </div>
                        </div>
                        {(errors.dateFrom && errors.dateTo) && (touched.dateFrom && touched.dateTo) && <div className={sg.errorField}>{errors.dateFrom}</div>}
                    </div>
                    <div className={sg.formBlockItem}>
                        <div className={sg.subTitle}>Тематика воспоминания</div>
                        <div className={sg.form__toolBar}>
                            <Field type="text" name="type" validate={typeField} placeholder={'Type here'} />
                            {errors.type && touched.type && <div className={sg.errorField}>{errors.type}</div>}
                        </div>
                    </div>
                    <div className={sg.formBlockItem}>
                        <div className={sg.subTitle}>Критерий важности</div>
                        <div className={s.sortForm__toolBar}>
                            <div className={s.sortForm__toolGroup}>
                                <Field type="text" name="ratingFrom" validate={ratingField} placeholder={'от'} />
                                <span>/</span>
                                <Field type="text" name="ratingTo" validate={ratingField} placeholder={'до'} />
                            </div>
                        </div>
                        {(errors.ratingFrom && errors.ratingTo) && (touched.ratingFrom && touched.ratingTo) && <div className={sg.errorField}>{errors.ratingFrom}</div>}
                    </div>
                    <div className={sg.middleFormButton}>
                        <button type="submit" disabled={isValid ? isSubmitting : "disabled"}>Поиск</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SortForm;