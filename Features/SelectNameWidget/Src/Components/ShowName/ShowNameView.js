import React, { PropTypes, Component } from 'react';

export default class ShowNameView extends Component {
    render () {
        return (
            <div className="showNameView">
                {this.props.selectedName}
            </div>
        );
    }
}

//  declare PropTypes here to check that props match expected type
ShowNameView.propTypes = {
    selectedName: PropTypes.string.isRequired
};
