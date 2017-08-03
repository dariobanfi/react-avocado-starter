import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.missed = true;
    }
  }

  render() {
    return <div>Sorry, that page was not found.</div>;
  }
}

NotFound.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  staticContext: PropTypes.object,
};

NotFound.defaultProps = {
  staticContext: {},
};

export default NotFound;
