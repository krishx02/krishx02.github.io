import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMAILJS_SERVICE_ID = 'service_90c3usq';
const EMAILJS_TEMPLATE_ID = 'template_7om85z8';
const EMAILJS_PUBLIC_KEY = '-_6DdheVE0s755TF_';

export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('sending');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <header className="contact__header">
                    <h2 className="contact__title">Get In Touch</h2>
                    <p className="contact__subtitle">
                        Have a question or want to work together?
                    </p>
                </header>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-item">
                            <FaMapMarkerAlt className="contact__info-icon" />
                            <div className="contact__info-text">
                                <span className="contact__info-label">Location</span>
                                <span className="contact__info-value">Portland, OR</span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <FaEnvelope className="contact__info-icon" />
                            <div className="contact__info-text">
                                <span className="contact__info-label">Email</span>
                                <span className="contact__info-value">
                                    <a href="mailto:krish.govind02@gmail.com">krish.govind02@gmail.com</a>
                                </span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <FaLinkedin className="contact__info-icon" />
                            <div className="contact__info-text">
                                <span className="contact__info-label">LinkedIn</span>
                                <span className="contact__info-value">
                                    <a href="https://linkedin.com/in/krish-govind" target="_blank" rel="noopener noreferrer">
                                        /in/krish-govind
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <FaGithub className="contact__info-icon" />
                            <div className="contact__info-text">
                                <span className="contact__info-label">GitHub</span>
                                <span className="contact__info-value">
                                    <a href="https://github.com/krishx02" target="_blank" rel="noopener noreferrer">
                                        @krishx02
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="contact__form-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="contact__form-error">{errors.name}</span>}
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="contact__form-error">{errors.email}</span>}
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__form-textarea"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="contact__form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="contact__form-submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="contact__form-status contact__form-status--success">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="contact__form-status contact__form-status--error">
                                Failed to send message. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
