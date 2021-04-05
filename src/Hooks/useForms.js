import React from 'react'

const useForms = () => {

    const [value, setValue] = React.useState('');

    function onChange({target}){
        setValue(target.value);
    }

    function reset(){
        setValue('');
    }
    
    return {
        value,
        setValue,
        onChange,
        reset,
    }
}

export default useForms;
