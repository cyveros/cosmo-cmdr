import React, {Component} from 'react';

export default class UIResourceValue extends Component {
  render() {
    const {resource, value, increment = false} = this.props;
    let className = 'undermark';

    if (resource.name === 'energy') {
      className = 'undermark';
    } else if (resource.isStorageFull()) {
      className = 'overmark';
    } else if (resource.isStorageNearFull()) {
      className = 'middlemark';
    }

    return (
      <span className={className}>{increment && '+'}{value}</span>
    );
  }
}
