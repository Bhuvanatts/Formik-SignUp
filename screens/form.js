import react  from 'react';
import { StyleSheet, Text, View,TextInput,Button,} from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup"


const formvalidation=yup.object({
    // required - copulsory input to create the data min(5) - min data required say 5 
    title:yup.string()
            .required()
            .min(5)  ,
    body: yup.string()
            .required()
            .min(5)  ,
    rating: yup.string().required().test("is-num-1-5","Rating must be  1-5",(val)=>{
        return(
            parseInt(val)<6 && parseInt(val)>0
        )
    })

})

const FormScreen=()=>{
    return(
        <View style={{marginTop:100}}>
    <Formik
    initialValues={{title:"", body:"",rating:""}}
    validationSchema={formvalidation}
    onSubmit={(values,action)=>{
        action.resetForm();
        console.log(values)
    }}>
        {(props)=>(
            <View>
                <TextInput
                style={{borderColor:"black", width:100,height:50}}
                placeholder='Title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                onBlur={props.handleBlur('title')}
                ></TextInput>
                <Text>{props.touched.title && props.errors.title}</Text>

                <TextInput
                    multiline
                    style={{borderColor:"black", width:100,height:50}}
                    placeholder='Body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    onBlur={props.handleBlur('body')}
                    ></TextInput>
                    <Text>{props.touched.body && props.errors.body}</Text>

                <TextInput
                    style={{borderColor:"black", width:100,height:50}}
                    placeholder='Rating 1-5'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    onBlur={props.handleBlur('rating')}
                    >
                </TextInput>
                <Text>{props.touched.rating && props.errors.rating}</Text>
                <Button title="SUBMIT" onPress={props.handleSubmit}/>
            </View>
        )

        }

    </Formik>
    </View>
    )
}

export default FormScreen