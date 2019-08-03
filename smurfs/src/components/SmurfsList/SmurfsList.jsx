import React from 'react';
import { connect } from 'react-redux';
import { getAllSmurfs } from '../../actions/index';
import Smurf from '../Smurf/Smurf';

const SmurfsList = props => {
  React.useEffect(() => {
    props.getAllSmurfs();
  }, []);

  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div style={{color: "red"}}><p>{props.error}</p></div>;
  }

  return props.smurfs.map(smurf => {
    return (
      <div key={smurf.id}>
        <Smurf smurf={smurf} />
      </div>
    );
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
