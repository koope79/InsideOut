import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import s from './Dreams.module.css';
import sg from '../common/GeneralStyles.module.css';
import classnames from 'classnames';

const SelectedDreamsForm = ({ sizeButton, dreamsData, generationDream }) => {

    const submit = (values, { setSubmitting }) => {
        generationDream(values.checked);
        setSubmitting(false);
    }

    let dreams = dreamsData.map(d => (<SelectedDream type={d.type} key={d.id} id={d.id} />))

    return (
        <Formik initialValues={{ checked: [] }} onSubmit={submit}>
            {({ values, errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.selectedDreamsForm}>
                        {dreams}
                    </div>
                    {dreams.length > 0 &&
                        <div className={classnames({ [sg.middleFormButton]: sizeButton == "middle" }, { [sg.form__button]: !sizeButton })} >
                            <button type="submit" disabled={values.checked.length > 0 ? isSubmitting : "disabled"}>Генерировать сценарий</button>
                        </div>
                    }
                </Form>
            )}
        </Formik>
    );
}

const SelectedDream = ({ id, type }) => {
    return (
        <div className={s.selectedDreamsForm__item}>
            <label>
                <Field type="checkbox" name="checked" value={`${id}`} />
                <span>{type}</span>
            </label>
        </div>

    );
}

export default SelectedDreamsForm;