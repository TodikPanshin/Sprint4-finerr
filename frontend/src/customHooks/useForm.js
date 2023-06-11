import { useState } from "react";
import { useEffectUpdate } from "./useEffectUpdate";

export function useForm(initialState, callBack) {

    const [fields, setFields] = useState(initialState)

    useEffectUpdate(() => {
        callBack?.(fields)
    }, [fields])


    function handleChange({ target }) {
        let { value, name: field, type, checked } = target
        switch (type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = checked
            default:
                break;
        }
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
    }

    return [fields, setFields, handleChange]

}