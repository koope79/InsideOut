import React from "react";
import { connect } from 'react-redux';
import { arrow, setSrcData } from "../../../redux/Projection-reducer";
import Search from "./Search";

const mapToStateToProps = (state) =>{
    return {
        galleryMemoryImage: state.projectionPage.galleryMemoryImage,
        infoMemory: state.memoriesPage.infoMemory,
    }
}

export default connect( mapToStateToProps, {arrow, setSrcData} )(Search);