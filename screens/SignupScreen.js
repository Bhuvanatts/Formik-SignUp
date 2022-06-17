import react ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from "yup"
import { Checkbox } from 'react-native-paper';


const validationSchema=yup.object({
    fullName:yup.string().trim().min(5,"Invalid name!").required("Name is required!"),
    email:yup.string().email("Invalid email!!").required("Email is required!"),
    password:yup.string().trim().min(8,"Password is too short").required("Password is required!"),
    confirmPassword:yup.string().equals([yup.ref("password"),null],"Password Does not match"),
    mobileNumber:yup.string()
                .required("This field is Required")
                 .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid").min(10,"Phone number is not valid")
})

const SignUpScreen=()=>{

    const [checked, setChecked] = useState(true);
    const userInfo = {
        email :"",
        fullName:"",
        password:"",
        confirmPassword:"",
        mobileNumber:""
    }



    return(
        <View style={{marginTop:100,justifyContent:"center",marginHorizontal:20}}>

            <Text style={styles.headingStyle}>Create Your Profile</Text>
            <Formik 
                initialValues={userInfo}
                validationSchema={validationSchema}
            >
                {({values,errors,handleChange,handleBlur,touched})=>{
                    const {fullName,email,password,confirmPassword,mobileNumber}= values

                    return(
                        <View>
                    <TextInput
                        style={styles.inputStyle}
                        label='Full Name'
                        onChangeText={handleChange('fullName')}
                        value={fullName}
                        onBlur={handleBlur('fullName')}
                        theme={{ colors: { text: '#266028', primary:"#5CAD2C" } }}   
                    />
                    <Text>{touched.fullName && errors.fullName}</Text>

                    <TextInput
                        style={styles.inputStyle}
                        label='Email address'
                        onChangeText={handleChange('email')}
                        value={email}
                        onBlur={handleBlur('email')}
                        theme={{ colors: { text: '#266028', primary:"#5CAD2C" } }}
                    ></TextInput>
                    <Text>{ touched.email && errors.email}</Text>
                    
                    <TextInput
                       style={styles.inputStyle}
                        label='Create Password'
                        onChangeText={handleChange('password')}
                        value={password}
                        secureTextEntry={true}
                        onBlur={handleBlur('password')}
                        theme={{ colors: { text: '#266028', primary:"#5CAD2C" } }}
                    ></TextInput>
                    <Text>{ touched.password && errors.password}</Text>

                    <TextInput
                        style={styles.inputStyle}
                        label='Confirm Password'
                        onChangeText={handleChange('confirmPassword')}
                        value={confirmPassword}
                        secureTextEntry={true}
                        onBlur={handleBlur('confirmPassword')}
                        theme={{ colors: { text: '#266028', primary:"#5CAD2C" } }}
                    ></TextInput>
                    <Text>{touched.confirmPassword && errors.confirmPassword}</Text>

                    <TextInput
                        style={styles.inputStyle}
                        label='Mobile number'
                        onChangeText={handleChange('mobileNumber')}
                        value={mobileNumber}
                        keyboardType="numeric"
                        onBlur={handleBlur('mobileNumber')}
                        theme={{ colors: { text: '#266028', primary:"#5CAD2C" } }}
                    ></TextInput>
                    <Text>{touched.mobileNumber && errors.mobileNumber}</Text>
                    <Text style={{fontSize:10,color:"#9bb59c"}}>Recruiters will contact you in this number</Text>
                    
                    <View style={{flexDirection:"row"}}>                    
                    <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color="#5CAD2C"
                    />
                    <Text style={{alignSelf:"center",color:"#333833"}}>Send me important updates</Text>
                    </View>

                    <TouchableOpacity style={styles.RegButton}>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>Register</Text>
                    </TouchableOpacity>
                    </View>

                    )
                }}

            </Formik>

        </View>
    )
}



const styles = StyleSheet.create({
    inputStyle:{
        backgroundColor:"white",
        color:"black"
    },
    headingStyle:{
        fontSize:30,
        color:'#5CAD2C',
        fontWeight:"bold"
    },
    RegButton:{
        backgroundColor:"#5CAD2C",
        borderRadius:30,
        width:"50%",
        height:"10%",
        justifyContent:"center",
        alignSelf:"center",
        marginTop:10
    }
})

export default SignUpScreen