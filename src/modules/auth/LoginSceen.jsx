import { useContext, useEffect } from "react";
import {useNavigate, Navigate} from "react-router-dom";
import useFormik from 'formik';
import * as yup from 'yup';
import AuthContext from './authContext';
import AxiosClient from "../../shared/plugins/axios";
import Alert from "../../shared/plugins/alert";
import { Container, Col, Row, Figure } from "react-bootstrap";


export const LoginScreen=()=>{
    const navigation = useNavigate();
    const {user, dispatch}= useContext(AuthContext);
    const formik = useFormik({
        initialValues:{
            userName: '',
            password:'',
        },
        validationSchem: yup.object().shape({
            username: yup.string().required("ingresa tu usuario").min(3, "minimo 3 letras"),
            password: yup.string().required("ingresa la contraseña").min(6, "minimo 6 caracteres")
        }), 
        onsubmit: async (values) =>{
            try{
                const URI ='/auth/login';
                const response = await AxiosClient({
                    url: URI, 
                    method: "POST",
                    data: JSON.stringify(values),
                });
                if(!response.error){
                    const action ={
                        type: "LOGIN",
                        payload: response.data
                    };
                    dispatch(action);
                    navigation("/products", {replace:true})
                }
            }catch(err){
                Alert.fire({
                    title: "Verificar datos ingresados",
                    text:"Usuario y contraseña correcta",
                    icon: "error",
                    confirmButtonColor:"#3085d6",
                    confirmButtonText:"Aceptar"
                })
            }
        }
    });

    const handleReturn = ()=>{
        navigation("/");
    }
    useEffect(()=>{
        document.title= "MT | LOGIN";
    }, []);
    if(user.isLogged){
        return <Navigate to={'/'}/>;
    }
    return (
    <>
        <section className='h-100 gradient-form' style={{backgroundColor: '#eee'}}>
            <Container className='py-5 h-100'>
            <Row className='d-flex justify-content-center align-items-center h-100'>
                <Col>
                    <div className='card rounded-3 text-black'>
                        <Row className='g-0'>
                            <Col className='col-lg-6'>
                                <div className='card-body p-md-5 mx-md-4'>
                                    <div className='text-center'>
                                        <Figure>
                                            <Figure.Image />
                                        </Figure>
                                        <h4 className='mt-1 mb-5 pb-1'>MARKET</h4>
                                    </div>
                                    <form onSubmit={formik.handleSubmit()}>
                                        <Form.Group className="form-outline mb-4">
                                            <Form.Label htmlFor="username">
                                                Usuario o correo electronico
                                            </Form.Label>
                                            <Form.Control 
                                            placeHolder= "mario moreno"
                                            id= "username"
                                            autoComplete="off"
                                            name = "username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            />
                                        </Form.Group>
                                    </form>

                                </div>
                            </Col>
                            <Col className='col-lg-6 d-flex align-items-center gradient-custom-2'>
                            
                            </Col>
                        </Row>

                    </div>
                </Col>

            </Row>
            </Container>
        </section>
    </>)
}