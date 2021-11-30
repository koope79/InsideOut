import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { arrow, resetGallery, setDataMemoryTh } from "../../../redux/Memory-reducer";
import Search from "./Search";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        memoryData: state.memory.memoryData,
    }
}

class SearchContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
    }
    render() {
        return (
            <Fragment>
                <Search {...this.props} />
            </Fragment>
        )
    }
}


export default connect(mapToStateToProps, { arrow, setDataMemoryTh, resetGallery })(SearchContainer);