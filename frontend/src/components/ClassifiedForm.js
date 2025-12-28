import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getClassifiedById, createClassified, updateClassified  } from './../store/actions/classifiedAction';
import useForm from './useForm';

import {
    ArrowBackIosIcon,
} from './icons';
import './ClassifiedForm.css';

const initialFieldValues = {
    title: '',
    description: '',
    date: '',
}

export default function ClassifiedForm({ props }) {
    const dispatch = useDispatch(); // this dispatch will allow my action to arrive at the store
    const state = useSelector(state => state.classifiedsList); // conects your component to Store with the useSelector
    const [currentId, setCurrentId] = useState(props.match.params.id)
    const [filledFields, setfilledFields] = useState(false);
    const { classified } = state;

    const fillInFields = () => {
        if(classified.Id !== undefined) {
            console.log(classified);
            const titleField = document.querySelector('#title')	
            const descField = document.querySelector('#description')
            
            console.log(titleField)
            if(titleField !== null) {
                titleField.value = classified.title;
                descField.value = classified.description;
                setfilledFields(true);
            }
        }
    }

    if(currentId !== '0' && !filledFields)
        fillInFields();

    //validate()
    //validate({title:'title 01'})
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "This field is required."
        /*if ('date' in fieldValues)
            temp.date = fieldValues.date ? "" : "This field is required."*/
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()

        console.log('form sent!')

        if (validate()) {
            console.log('validated')
            const onSuccess = () => {
                alert('Cadastrado com Successo')

                resetForm()
            }
            
            if (currentId === '0') {
                console.log(values)
                dispatch(createClassified(values, onSuccess))
            }else{
                dispatch(updateClassified(currentId, values, onSuccess))
            }
        }
    }    

    useEffect(() => {

        try{
            if (currentId !== '0') {
                console.log(`currentId: ${currentId}`)
                const x = dispatch(getClassifiedById(currentId))
                setValues({
                    x
                    // classifiedList.find(x => x.id === currentId)
                })
                setErrors({})
            }
        }catch(error) {
            console.log(error)
        }
    }, [dispatch, setValues, setErrors, currentId])

    return(
        <>
        <Link to="/" title="voltar">
            <ArrowBackIosIcon />
        </Link>
        <div className='container'>
            <h1>Formulário de Classificado</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título</label> 
                <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Título'
                    onChange={handleInputChange}
                    {...(errors.title && { error: true, helperText: errors.title })}
                />

                <label htmlFor="description">Descrição</label> 
                <textarea
                    type='text'
                    id='description'
                    name='description'
                    placeholder='Descrição do classificado ...'
                    onChange={handleInputChange}
                    {...(errors.description && { error: true, helperText: errors.description })}
                >
                </textarea>
    
                <button
                    className='btn green'
                    type="submit"
                >
                    Adicionar
                </button>

                <button
                    type="reset"
                    onClick={resetForm}
                >
                    Reset
                </button>
            </form>
        </div>
        </>
    )
}