import React, {useEffect} from 'react'
import axios from "axios"

import { Formik } from "formik"
import * as Yup from "yup"

import RegistrationForm from "./RegistrationForm"

const Registration = ({history}) => {

    useEffect(()=>{
        const serializedToken = localStorage.getItem("mud_token")
        const token = JSON.parse(serializedToken)
        if (token && token.key){
            history.push("/game")
        }
    })
    return (
        <div>
            <Formik initialValues={{username:"", email:"", password1: "", password2:""}} onSubmit={(values, actions) => {
                axios.post("http://localhost:8000/api/registration/", values)
                .then(response => {
                    const serializedToken = JSON.stringify(response.data)
                    localStorage.setItem("mud_token", serializedToken)
                    //console.log(response.data)
                })
            }}
            render={formikProps => (
                <RegistrationForm {...formikProps}/>
            )}
            />
        </div>
    )
}

export default Registration
