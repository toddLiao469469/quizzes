import { useState } from "react"



const useForm = ({ initialValues, validation, onSubmit }) => {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {

        if (e.target.hasOwnProperty('checked')) {
            const { name, checked } = e.target
            console.log('have', e.target.name)
            setValues((prev) => { return { ...prev, [name]: checked, } })

        } else {
            const { name, value } = e.target
            setValues((prev) => { return { ...prev, [name]: value, } })
        }

        setErrors({})

    }

    const handleSubmit = (e) => {
        console.log('handleSubmit', validation(values))
        setErrors(validation(values))

        onSubmit()
    }

    return { values, handleChange, handleSubmit, errors }
}
export default useForm