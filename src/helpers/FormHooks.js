import { useState } from 'react'

const formHooks = () => {
    const [inputs, setInputs] = useState({})
    const [checkMap, setChecks] = useState(new Map())

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }

    const handleCheckboxChange = (event) => {
        event.persist();
        setChecks(checkMap => {
            const newMap = checkMap.set(event.target.id, event.target.checked)

            const checkedProcessed = []

            newMap.forEach((value, key) => {
                if (value) {
                    checkedProcessed.push({ howDidFindOut: key })
                }
            })

            setInputs(inputs => ({ ...inputs, [event.target.name]: checkedProcessed }))
            
            return (newMap)
        })    
    }
    return {
        handleInputChange,
        handleCheckboxChange,
        inputs,
        checkMap
    };
}

export default formHooks
