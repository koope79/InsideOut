import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { selectionMemoriesSort } from "../../../redux/Memory-reducer";
import Sort from "./Sort";


const mapToStateToProps = (state) => {
    return {
        errorMessage: state.memory.errorMessage
    }
}

class SortContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <Sort {...this.props}/>
            </Fragment>
        )
    }
}

export default connect(mapToStateToProps, { selectionMemoriesSort })(SortContainer);