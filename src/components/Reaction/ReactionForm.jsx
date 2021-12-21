import React from "react";
import { Formik, Form, Field } from 'formik';
import s from '../Dreams/Dreams.module.css';
import sg from '../common/GeneralStyles.module.css';
import classnames from 'classnames';
import Gallery from "../common/Gallery";

const ReactionForm = ({ sizeButton, reactionData, arrow, galleryMemoryImage, setDataGallery }) => {

    const submit = (values, { setSubmitting }) => {
        console.log(values.picked);
        setSubmitting(false);
    }

    let reactions = reactionData.map(d => (<ReactionField reaction={d.reaction} key={d.id} id={d.id} src={d.src} setDataGallery={setDataGallery}/>))

    return (
        <Formik initialValues={{ picked: '' }} onSubmit={submit}>
            {({ values, errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.selectedDreamsForm}>
                        {reactions}
                    </div>
                    {reactions.length > 0 &&
                        <div>
                            <Gallery size={"small"} arrow={arrow} galleryMemoryImage={galleryMemoryImage} />
                            <div className={classnames({ [sg.middleFormButton]: sizeButton == "middle" }, { [sg.form__button]: !sizeButton })} >
                                <button type="submit" disabled={values.picked.length > 0 ? isSubmitting : "disabled"}>Выполнить действие</button>
                            </div>
                        </div>
                    }
                </Form>
            )}
        </Formik>
    );
}

const ReactionField = React.memo(({ id, reaction, src, setDataGallery }) => {
    return (
        <div className={s.selectedDreamsForm__item} >
            <label>
                <Field type="radio" name="picked" value={`${id}`} onClick={()=>{setDataGallery(src);}}/>
                <span>{reaction}</span>
            </label>
        </div>

    );
});

export default ReactionForm;