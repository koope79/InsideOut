import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { arrow, resetGallery, saveMemoryTh, setDataGallery } from "../../../redux/Memory-reducer";
import Save from "./Save";


const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
    }
}

class SaveContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
    }
    render() {
        return (
            <Fragment>
                <Save {...this.props}/>
            </Fragment>
        )
    }
}

export default connect(mapToStateToProps, { arrow, resetGallery, setDataGallery, saveMemoryTh })(SaveContainer);