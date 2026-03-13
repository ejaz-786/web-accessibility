import React, { useState, useRef } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const errorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.password) {
            setError("Password is required.");
            // Move focus to the error message so screen readers announce it immediately
            errorRef.current?.focus();
            return;
        }
        console.log("Logging in with:", formData);
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h2>Sign In</h2>

            {/* Error Summary: Highly important for accessibility */}
            {error && (
                <div
                    role="alert"
                    ref={errorRef}
                    tabIndex="-1"
                    style={{ color: '#d32f2f', marginBottom: '1rem', outline: 'none' }}
                >
                    <strong>Error:</strong> {error}
                </div>
            )}

            <div>
                <label htmlFor="email-field">Email Address</label>
                <input
                    id="email-field"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="username"
                    required
                    aria-invalid={error && !formData.email ? "true" : "false"}
                />
            </div>

            <div>
                <label htmlFor="password-field">Password</label>
                <input
                    id="password-field"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    autoComplete="current-password"
                    required
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
};