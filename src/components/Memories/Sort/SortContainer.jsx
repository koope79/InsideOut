import React, { Fragment } from "react";
import { connect } from 'react-redux';
import Sort from "./Sort";


const mapToStateToProps = (state) => {
    return {
        
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

export default connect(mapToStateToProps, { })(SortContainer);