import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import sg from '../../common/GeneralStyles.module.css';
import s from './Save.module.css';
import { dateField, ratingField, requiredField, typeField } from "../../../validators/validators.js";
import Gallery from "../../common/Gallery";
import classnames from 'classnames';

const SaveForm = ({ arrow, galleryMemoryImage, setDataGallery, saveMemoryTh }) => {
    let [isValidSrc, setValidSrc] = useState(false);
    let [arr, setArr] = useState([]);

    const submit = (values, { setSubmitting, resetForm }) => {
        saveMemoryTh(values, arr);
        arr.length = 0;
        setSubmitting(false);
        resetForm();
        setValidSrc(false);
    }

    const MemoriesSelected = (e) => {
        arr.length = 0;
        if (e.target.files.length) {
            for (let i = 0; i < e.target.files.length; i++) {
                arr.push(URL.createObjectURL(e.target.files[i]));
            }
            setValidSrc(true);
            setDataGallery(arr);
        }
    }

    return (
        <Formik initialValues={{ date: '', type: '', desc: '', rating: '' }} validateOnMount={true} onSubmit={submit}>
            {({ errors, touched, isValid = false, isSubmitting }) => (
                <Form>
                    <div className={s.formToolBar}>
                        <div className={s.form_block}>
                            <div className={sg.subTitle}>Дата воспоминания</div>
                            <div className={sg.form__toolBar}>
                                <Field type="text" name="date" validate={dateField} placeholder={'04/09/20'} />
                                {errors.date && touched.date && <div className={sg.errorField}>{errors.date}</div>}
                            </div>
                        </div>
                        <div className={s.form_block}>
                            <div className={sg.subTitle}>Тематика воспоминания</div>
                            <div className={sg.form__toolBar}>
                                <Field type="text" name="type" validate={typeField} placeholder={'Type here'} />
                                {errors.type && touched.type && <div className={sg.errorField}>{errors.type}</div>}
                            </div>
                        </div>
                        <div className={s.form_block}>
                            <div className={sg.subTitle}>Описание</div>
                            <div className={sg.form__toolBar}>
                                <Field type="text" name="desc" validate={typeField} placeholder={'Description'} />
                                {errors.desc && touched.desc && <div className={sg.errorField}>{errors.desc}</div>}
                            </div>
                        </div>
                        <div className={s.form_block}>
                            <div className={sg.subTitle}>Критерий важности</div>
                            <div className={sg.form__toolBar}>
                                <Field type="text" name="rating" validate={ratingField} placeholder={'Rating here'} />
                                {errors.rating && touched.rating && <div className={sg.errorField}>{errors.rating}</div>}
                            </div>
                        </div>
                        <div className={ classnames( s.form_block, s.saveForm__inputImage ) }>
                            <input type="file" name={'photoAva'} id="input__file" className={s.input__file} onChange={MemoriesSelected} multiple/>
                            <label htmlFor="input__file" className={s.input__file_button}>
                                <span className={s.input__file_button}>{arr.length > 0 ? arr.length : "Загрузить"}</span>
                            </label>
                        </div>
                    </div>

                    <Gallery arrow={arrow} galleryMemoryImage={galleryMemoryImage} />

                    <div className={sg.general__button}>
                        <button type="submit" disabled={(isValid && isValidSrc) ? isSubmitting : "disabled"}>Сохранить</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default SaveForm;