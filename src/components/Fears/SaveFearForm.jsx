import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import sp from '../ProjectionMemory/Projection.module.css';
import sg from '../common/GeneralStyles.module.css';
import s from '../Memories/Save/Save.module.css';
import { dateField, typeField } from "../../validators/validators";
import classnames from 'classnames';

const SaveFearForm = ({ saveFear, sizeButton }) => {
    let [isValidSrc, setValidSrc] = useState(false);
    let [arr, setArr] = useState([]);

    const submit = (values, { setSubmitting, resetForm }) => {
        saveFear(values, arr);
        setSubmitting(false);
        resetForm();
        setValidSrc(false);
        setArr([]);
    }

    const MemoriesSelected = (e) => {
        arr.length = 0;
        if (e.target.files.length) {
            for (let i = 0; i < e.target.files.length; i++) {
                arr.push(URL.createObjectURL(e.target.files[i]));
            }
            setValidSrc(true);
        }
    }

    return (
        <Formik initialValues={{ dateFear: '', typeFear: '', descFear: '' }} validateOnMount={true} onSubmit={submit}>
            {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={sp.form_block}>
                        <div className={sg.subTitle}>Дата страха</div>
                        <div className={sp.toolsProjection__toolBar}>
                            <Field type="text" name="dateFear" validate={dateField} placeholder={'04/09/20'} />
                            {errors.dateFear && touched.dateFear && <div className={sg.errorField}>{errors.dateFear}</div>}
                        </div>
                    </div>
                    <div className={sp.form_block}>
                        <div className={sg.subTitle}>Тематика страха</div>
                        <div className={sp.toolsProjection__toolBar}>
                            <Field type="text" name="typeFear" validate={typeField} placeholder={'Type here'} />
                            {errors.typeFear && touched.typeFear && <div className={sg.errorField}>{errors.typeFear}</div>}
                        </div>
                    </div>
                    <div className={sp.form_block}>
                        <div className={sg.subTitle}>Описание</div>
                        <div className={sp.toolsProjection__toolBar}>
                            <Field type="text" name="descFear" validate={typeField} placeholder={'Description'} />
                            {errors.descFear && touched.descFear && <div className={sg.errorField}>{errors.descFear}</div>}
                        </div>
                    </div>
                    <div className={ classnames( sp.form_block, s.saveForm__inputImage ) }>
                            <input type="file" name={'photoAva'} id="input__file" className={s.input__file} onChange={MemoriesSelected} multiple/>
                            <label htmlFor="input__file" className={s.input__file_button}>
                                <span className={s.input__file_button}>{arr.length > 0 ? arr.length : "Загрузить"}</span>
                            </label>
                        </div>
                    <div className={classnames({ [sg.middleFormButton]: sizeButton == "middle" }, { [sg.form__button]: !sizeButton })} >
                        <button type="submit" disabled={(isValid && isValidSrc) ? isSubmitting : "disabled"}>Сохранить</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SaveFearForm;