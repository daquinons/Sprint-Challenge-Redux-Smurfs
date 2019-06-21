import React from 'react';
import { connect } from 'react-redux';
import { getAllSmurfs, setLoading } from '../../actions/index';

const SmurfsList = props => {
  React.useEffect(() => {
    props.getAllSmurfs();
  }, []);

  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>{props.error}</div>;
  }

  return props.smurfs.map(smurf => {
    return <id>{smurf.name}</id>;
  });
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getAllSmurfs }
)(SmurfsList);
