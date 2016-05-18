import React, { PropTypes, Component } from 'react';

export default class ShowNameDisplay extends Component {
    render () {
        return (
            <div className="showNameDisplay">
                {this.props.selectedName}
            </div>
        );
    }
}

//  declare PropTypes here to check that props match expected type
ShowNameDisplay.propTypes = {
    selectedName: PropTypes.string.isRequired
};
