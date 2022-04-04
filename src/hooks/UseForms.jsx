import  { useState } from 'react'

export const UseForms = (state = {}) => {

    const [value, setvalue] = useState(state)


    const handleValue = ({target}) => {
        setvalue({
            ...value,
            [target.name] : target.value
        })
    }

    return [handleValue, value]
}
