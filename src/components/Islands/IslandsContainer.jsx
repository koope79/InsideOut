import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getIslandsPersonality, getListTypesMemories, pickTypeMemory } from "../../redux/Islands-reducer";
import Islands from "./Islands";

const mapToStateToProps = (state) => {
    return {
        islandsPersonality: state.islands.islandsPersonality,
        listTypes: state.islands.listTypes,
        errorMessage: state.memory.errorMessage
    }
}

class IslandsContainer extends React.Component {
    componentDidMount(){
        this.props.getIslandsPersonality();
    }
    render(){
        return (
            <Fragment>
                <Islands {...this.props}/>
            </Fragment>
        );
    }
}

export default connect(mapToStateToProps, { getIslandsPersonality, getListTypesMemories, pickTypeMemory })(IslandsContainer);