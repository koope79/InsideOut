import React from "react";
import { connect } from 'react-redux';
import { arrow, setProjectionMemory, setSrcData } from "../../redux/Projection-reducer";
import Projection from "./Projection";
import s from './Projection.module.css';


const mapToStateToProps = (state) =>{
    return {
        galleryMemoryImage: state.projectionPage.galleryMemoryImage,
        projectionMemoryImage: state.projectionPage.projectionMemoryImage
    }
}

export default connect( mapToStateToProps, {arrow, setProjectionMemory, setSrcData} )(Projection);