import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactUs.css"

export const ContactUs = () => {
    const refForm = useRef<HTMLFormElement>(null);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const apiKey = import.meta.env.VITE_API_KEY;

        try {
            const result = await emailjs.sendForm(serviceId, templateId, refForm.current!, apiKey);
            console.log(result.text);
            setStatusMessage('Mensaje enviado con éxito!');
        } catch (error) {
            console.error(error);
            setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="container conctactUs">
            <h2 className="text-center mb-4">Contáctame</h2>
            <form ref={refForm} onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                <fieldset className="mb-3">
                    <label className="form-label" htmlFor="from_name">Nombre</label>
                    <input name='from_name' type="text" placeholder='nickname' className="form-control" required />
                </fieldset>
                <fieldset className="mb-3">
                    <label className="form-label" htmlFor="from_email">Email</label>
                    <input name='from_email' type="email" placeholder='nickname@email.com' id="from_email" className="form-control" required />
                </fieldset>
                <fieldset className="mb-3">
                    <label className="form-label" htmlFor="message">Mensaje</label>
                    <textarea name='message' maxLength={500} required placeholder='Escriba su mensaje' className="form-control"></textarea>
                </fieldset>

                <button type="submit" className="btn btn-primary w-100">Enviar</button>

                {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>} {/* Mensaje de estado */}
            </form>
        </div>
    );
}
