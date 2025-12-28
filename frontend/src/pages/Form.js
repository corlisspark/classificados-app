import React from 'react';
import ClassifiedForm from './../components/ClassifiedForm';

function Form({ ...props }) {
    //console.log(props)
    return(
        <ClassifiedForm props={props} />
    )
}

export default Form;