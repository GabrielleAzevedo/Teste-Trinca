import React from 'react'

const useForms = () => {

    const [value, setValue] = React.useState('');

    function onChange({target}){
        setValue(target.value);
    }
    
    return {
        value,
        setValue,
        onChange,
    }
}

export default useForms;
