import React from 'react';
import { connect } from 'react-redux';
import { postNewSmurf } from '../../actions/index';

const AddForm = props => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();
  const heightInputRef = React.createRef();

  const onClick = () => {
    const newSmurf = {
      name: nameInputRef.current.value,
      age: Number(ageInputRef.current.value),
      height: heightInputRef.current.value
    };

    props.postNewSmurf(newSmurf);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    heightInputRef.current.value = '';
  };

  return (
    <div className="add-form">
      <h2>Add a Smurf</h2>
      <input ref={nameInputRef} placeholder="Name" type="text" name="" id="" />
      <input ref={ageInputRef} placeholder="Age" type="text" name="" id="" />
      <input ref={heightInputRef} placeholder="Height" type="text" name="" id="" />
      <button onClick={onClick}>Add Smurf</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { postNewSmurf }
)(AddForm);
