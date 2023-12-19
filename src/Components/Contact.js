import React, { useRef, useState } from 'react';
import { UilLinkedin, UilGithub, UilYoutube, UilEnvelopeCheck, UilMobileAndroidAlt } from '@iconscout/react-unicons'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
    const form = useRef();
    const captchaRef = useRef(null)

    const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        purpose: 'discussion',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        purpose: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the corresponding error when user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validate Name
        if (!formData.name.trim() || /[0-9!@#$%^&*()_+={};':"\\|,.<>?/]+/.test(formData.name)) {
            newErrors.name = 'Please enter a name';
            isValid = false;
        } else {
            newErrors.name = '';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        // Validate Mobile
        const mobileRegex = /^[0-9]+$/;
        if (!mobileRegex.test(formData.mobile.trim()) || formData.mobile.length !== 10) {
            newErrors.mobile = 'Please enter a valid mobile no';
            isValid = false;
        } else {
            newErrors.mobile = '';
        }

        // Validate Purpose
        if (!formData.purpose) {
            newErrors.purpose = 'Please choose a purpose.';
            isValid = false;
        } else {
            newErrors.purpose = '';
        }

        setErrors(newErrors);
        return isValid;
    };
    const getInputBorderColor = (inputName) => {
        // Use Tailwind CSS classes to set border color based on validation status
        if (errors[inputName]) {
            return 'border-red-600'; // Set the border color to red if there is an error
        } else {
            return 'border-[#ffffff26] focus:border-[#cc00ff]'; // Set the default border color
        }
    };

    const handleRecaptchaChange = (value) => {
        if (value) {
            setSubmissionError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        try {

            if (validateForm()) {
                console.log('vliadation true')
                if (captchaRef.current && captchaRef.current.getValue()) {



                    console.log(validateForm(), captchaRef.current, captchaRef.current.getValue());
                    const token = captchaRef.current.getValue();
                    captchaRef.current.reset();

                    emailjs.sendForm('service_w4yhkhe', 'template_qwwdhwb', e.target, 'user_e6CZf4K6kU9TCU80qBwFO')
                        .then((result) => {
                            alert('Thank You, I am shortly contact with you');
                            window.location.reload();
                        }, (error) => {
                            alert('Oops!. Try again later');
                        });

                    console.log('Form submitted:', formData);
                } else {
                    if (!isRecaptchaVerified) {
                        console.error('reCAPTCHA verification failed.');
                        setSubmissionError('');
                        return;
                    }

                    setSubmissionError('');
                    console.log('reCAPTCHA verification failedsss');
                }
            } else {
                setSubmissionError('reCAPTCHA verification failed. Please verify and submit again.');
            }
        } catch (error) {
            console.log('catch');
            console.error('Form submission error:', error.message);
            setSubmissionError('An error occurred during form submission. Please try again.');
        }
    };

    return (
        <section className='py-12 z-20 relative' id='contact'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-4 text-center animate__animated animate__jackInTheBox">Contact Us</h2>
                <p className="text-lg text-gray-400 mb-4 text-center">
                    Ready to turn your ideas into reality? Whether you're looking to hire a dedicated professional or discuss your next project, I'm here for you. Let's connect and make it happen!
                </p>
                <ul className='mb-4'>
                    <li>
                        <a href='mailto:erajamanickam72@gmail.com' className='text-[#61DAFB] hover:text-white mr-2 flex items-center justify-center mb-1'><UilEnvelopeCheck size="20" color="#61DAFB" className='mr-2' /> erajamanickam72@gmail.com</a>
                    </li>
                    <li>
                        <a href='tel:+917449193747' className='text-[#61DAFB] hover:text-white flex items-center justify-center'><UilMobileAndroidAlt size="20" color="#61DAFB" className='mr-0.5' /> +91 7449193747</a>
                    </li>
                </ul>

                <div className='flex justify-center mb-8'>
                    <a href="https://www.linkedin.com/in/rajamanickamweb/" target="_blank" className='mr-2 text-[#0A66C2] hover:text-[#6fb7ffdc]' rel="noopener noreferrer">
                        <UilLinkedin size="30" />
                    </a>
                    <a href="https://www.youtube.com/@rajamanickamweb" target="_blank" className='mr-2 text-[#CD201F] hover:text-[#dd5b5b]' rel="noopener noreferrer">
                        <UilYoutube size="30" />
                    </a>
                    <a href="https://github.com/erajamanickam/" target="_blank" className='mr-2 text-[#fafbfc] hover:text-[#fafbfcbe]' rel="noopener noreferrer">
                        <UilGithub size="30" />
                    </a>
                </div>
                <form className="max-w-md mx-auto" ref={form} onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className={`w-full border-2 border-solid ${getInputBorderColor('name')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.name && <p className='text-red-600 text-xs'>{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`w-full border-2 border-solid ${getInputBorderColor('email')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.email && <p className='text-red-600 text-xs'>{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                        <div className="mb-4">
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile"
                                className={`w-full border-2 border-solid ${getInputBorderColor('mobile')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.mobile && <p className='text-red-600 text-xs'>{errors.mobile}</p>}
                        </div>

                        <div className="mb-4 flex items-center">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="discussionOption"
                                    name="purpose"
                                    value="discussion"
                                    checked={formData.purpose === 'discussion'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="discussionOption"
                                    className="cursor-pointer ml-2 text-slate-300"
                                >
                                    Discussion
                                </label>
                                <input
                                    type="radio"
                                    id="hireOption"
                                    name="purpose"
                                    value="hire"
                                    checked={formData.purpose === 'hire'}
                                    onChange={handleChange}
                                    className="ml-4"
                                />
                                <label htmlFor="hireOption" className="cursor-pointer ml-2 text-slate-300">
                                    Hire
                                </label>
                            </div>
                        </div>


                    </div>

                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="4"
                            className="w-full border-2 border-solid border-[#ffffff26] focus:border-[#cc00ff] p-2 rounded-md bg-transparent outline-0 text-white"
                        ></textarea>
                    </div>


                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        ref={captchaRef}
                        onChange={handleRecaptchaChange}
                    />
                    {submissionError && <div className="text-red-500">{submissionError}</div>}

                    <button type='submit' className="py-0 px-7 h-[2.6em] transition-all duration-150 ease-in-out shadow-lg focus:outline-none font-size-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-gradient-to-r text-white from-[#89E5FF] to-[#5468FF] shadow-indigo-500/50 rounded-full hover:transform hover:-translate-y-1 hover:shadow-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
