import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {setTextAction} from '../actions/appActions';

import results from '../mocks/autoCompleteMock';

const Search = () => {
    const dispatch = useDispatch();

    // set functions
    const setText = (text) => dispatch(setTextAction(text))
    
    // Events
    const onTyping = (event, value) => {
        setText(value);
    }

    return (
        <Autocomplete
        id="combo-box-demo"
        options={results}
        onChange={onTyping} //(e,v)=> setFilter(v)}
        onInputChange={onTyping}
        getOptionLabel={(option) => option.LocalizedName}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search here" variant="outlined" />}
      />
    )
}

export default Search
