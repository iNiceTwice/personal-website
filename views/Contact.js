import SectionTitle from "../components/SectionTitle";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const contactSchema = yup.object().shape({
    name: yup.string().min(4,"Mínimo 4 caracteres.").max(30,"Máximo 30 caracteres.").required("Completa este campo."),
    email:yup.string().email("Email inválido.").required("Completa este campo."),
    message: yup.string().min(4,"Mínimo 4 caracteres.").max(600,"Máximo 600 caracteres.").required("Completa este campo."),
})

const Contact = ({ mailToken }) => {
    
    const form = useRef();
    const [ sended, setSended ] = useState(false)

    const notifySuccess = () => toast.success("Mensaje enviado con éxito.",{
        position: "bottom-right"
    })
    const notifyError = () => toast.error("Ups, intenta nuevamente.",{
        position: "bottom-right"
    })
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues:{
        name:"",
        email:"",
        message:""
    },
    onSubmit:(values)=>{
    emailjs.sendForm('service_lskcfaw', 'template_zr7h3dq', form.current, mailToken)
        .then((result) => {
            notifySuccess()
            setSended(true)
            console.log(result.text);
        }, (error) => {
            notifyError()
          console.log(error.text);
        });
    },
    validationSchema: contactSchema
    })

    
    return ( 
        <section className="py-20 w-5/6 flex flex-col items-center">
            <span id="contact" className='relative top-[-250px]'></span>
            <SectionTitle title="Contact" />
            <form ref={form} onSubmit={ handleSubmit } className="flex flex-col mt-8 w-full lg:w-5/6">
                <div className="flex lg:flex-row flex-col w-full gap-4">
                    <div className="flex flex-col w-full">
                        <input 
                            onChange={ handleChange }
                            className="outline-none p-2 w-full shadow-md" 
                            placeholder="Name"
                            id="name" 
                            name="name" 
                            value={ values.name }
                        />
                        { touched.name && Boolean(errors.name) && <span className="ml-4 mt-2 text-sm text-rose-900 w-full">{ errors.name }</span> }
                    </div>
                    <div className="flex flex-col w-full">
                        <input 
                            onChange={ handleChange }
                            className="outline-none p-2 w-full shadow-md" 
                            placeholder="Email"
                            id="email" 
                            name="email" 
                            value={ values.email }
                            type="email"
                        />
                        { touched.email && Boolean(errors.email) && <span className="ml-4 mt-2 text-sm text-rose-900 w-full">{ errors.email }</span> }
                    </div>
                </div>
                <div className="mt-4 w-full">
                    <textarea 
                        onChange={ handleChange }
                        className="w-full outline-none shadow-md p-2" 
                        placeholder="Message" 
                        rows={10}
                        id="message" 
                        name="message" 
                        value={ values.message }
                    />
                    { touched.message && Boolean(errors.message) && <span className="ml-4 mb-1 -mt-1 text-sm text-rose-900 w-full">{ errors.message }</span> }
                </div>
                <button type="submit" className="mt-2 w-full p-2 bg-rose-900 hover:bg-rose-900/90 text-white"> Send </button>
            </form>            
        </section>
     );
}
 
export default Contact;