import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from "react-icons/io5";
import { HiSparkles, HiCamera } from "react-icons/hi2";

const LoginForm = ({ showLoginSection, loginDetails, handleLogin }) => {
    const [previewPhoto, setPreviewPhoto] = useState(null);
    const fileInputRef = useRef(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setPreviewPhoto(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name  = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        if (!name || !email) return;

        handleLogin({ name, email, photo: previewPhoto });
    };

    return (
        <div
            className="login-form-overlay"
            style={{ display: showLoginSection === 'block' ? 'block' : 'none' }}
        >
            <StyledWrapper>
                <div className="login-card">
                    {/* Top gradient bar */}
                    <div className="top-bar" />

                    {/* Header */}
                    <div className="card-header">
                        <div className="brand">
                            <div className="brand-icon"><HiSparkles /></div>
                            <span className="brand-title">Sign In</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => loginDetails('hidden')}
                            className="close-btn"
                            aria-label="Close"
                        >
                            <IoClose />
                        </button>
                    </div>

                    <form className="form" onSubmit={handleSubmit}>
                        {/* ── Profile Photo Upload ── */}
                        <div className="photo-upload-row">
                            <div
                                className="photo-preview"
                                onClick={() => fileInputRef.current?.click()}
                                title="Click to upload photo"
                            >
                                {previewPhoto ? (
                                    <img src={previewPhoto} alt="Profile" className="photo-img" />
                                ) : (
                                    <div className="photo-placeholder">
                                        <HiCamera className="camera-icon" />
                                        <span>Photo</span>
                                    </div>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handlePhotoChange}
                            />
                            <div className="photo-hint">
                                <p className="photo-hint-title">Profile Photo</p>
                                <p className="photo-hint-sub">Click the circle to upload</p>
                            </div>
                        </div>

                        {/* ── Name ── */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="name">Full Name</label>
                            <input
                                required
                                className="field-input"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                            />
                        </div>

                        {/* ── Email ── */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="email">Email</label>
                            <input
                                required
                                className="field-input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* ── Password ── */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="password">Password</label>
                            <input
                                required
                                className="field-input"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="forgot-row">
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </div>

                        <button type="submit" className="login-button">Sign In</button>
                    </form>

                    <div className="divider">
                        <span className="divider-line" />
                        <span className="divider-text">or continue with</span>
                        <span className="divider-line" />
                    </div>

                    <div className="social-accounts">
                        <button type="button" className="social-btn" title="Google">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 488 512" fill="currentColor">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </button>
                        <button type="button" className="social-btn" title="Apple">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 384 512" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                        </button>
                        <button type="button" className="social-btn" title="X">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </button>
                    </div>

                    <p className="agreement">
                        <a href="#">Learn user licence agreement</a>
                    </p>
                </div>
            </StyledWrapper>
        </div>
    );
}

const StyledWrapper = styled.div`
  .login-card {
    width: 360px;
    background: rgba(12, 12, 22, 0.97);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 24px;
    padding: 0 0 24px;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.12);
    animation: fadeInUp 0.35s ease both;
    overflow: hidden;
  }

  .top-bar {
    height: 3px;
    background: linear-gradient(90deg, #7C3AED, #9D5BFF, #06B6D4);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 20px;
  }
  .brand { display: flex; align-items: center; gap: 10px; }
  .brand-icon {
    width: 34px; height: 34px;
    border-radius: 9px;
    background: linear-gradient(135deg, #7C3AED, #06B6D4);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 16px;
    box-shadow: 0 4px 14px rgba(124,58,237,0.4);
  }
  .brand-title {
    font-family: 'Inter', sans-serif;
    font-size: 18px; font-weight: 700;
    background: linear-gradient(135deg, #A78BFA, #06B6D4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .close-btn {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    width: 30px; height: 30px;
    display: flex; align-items: center; justify-content: center;
    color: #94A3B8; cursor: pointer; font-size: 16px;
    transition: all 0.2s;
  }
  .close-btn:hover { background: rgba(255,255,255,0.12); color: #F1F5F9; }

  .form {
    display: flex; flex-direction: column; gap: 14px;
    padding: 0 24px;
  }

  /* ── Photo Upload ── */
  .photo-upload-row {
    display: flex; align-items: center; gap: 14px;
    padding: 12px 14px;
    background: rgba(124,58,237,0.07);
    border: 1.5px dashed rgba(124,58,237,0.3);
    border-radius: 14px;
    margin-bottom: 2px;
    cursor: pointer;
  }
  .photo-preview {
    width: 56px; height: 56px;
    border-radius: 50%;
    border: 2px solid rgba(124,58,237,0.45);
    background: rgba(124,58,237,0.1);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .photo-preview:hover {
    border-color: #7C3AED;
    box-shadow: 0 0 0 3px rgba(124,58,237,0.2);
  }
  .photo-img { width: 100%; height: 100%; object-fit: cover; }
  .photo-placeholder {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 3px; color: #7C3AED;
  }
  .camera-icon { font-size: 20px; }
  .photo-placeholder span { font-size: 9px; font-family: 'Inter',sans-serif; font-weight: 600; letter-spacing: 0.04em; color: #7C3AED; }
  .photo-hint-title { font-family:'Inter',sans-serif; font-size:13px; font-weight:600; color:#94A3B8; margin:0; }
  .photo-hint-sub   { font-family:'Inter',sans-serif; font-size:11px; color:#475569; margin:2px 0 0; }

  .field-group { display: flex; flex-direction: column; gap: 6px; }
  .field-label {
    font-family: 'Inter', sans-serif;
    font-size: 11px; font-weight: 700;
    color: #64748B; letter-spacing: 0.06em; text-transform: uppercase;
  }
  .field-input {
    background: rgba(255,255,255,0.04);
    border: 1.5px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 11px 14px;
    font-family: 'Inter', sans-serif;
    font-size: 14px; color: #F1F5F9;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
    width: 100%;
  }
  .field-input::placeholder { color: #334155; }
  .field-input:focus {
    border-color: #7C3AED;
    background: rgba(124,58,237,0.07);
    box-shadow: 0 0 0 3px rgba(124,58,237,0.2);
  }

  .forgot-row { display: flex; justify-content: flex-end; margin-top: -4px; }
  .forgot-link {
    font-size: 12px; color: #7C3AED; font-family: 'Inter', sans-serif;
    text-decoration: none; font-weight: 500; transition: color 0.2s;
  }
  .forgot-link:hover { color: #A78BFA; }

  .login-button {
    width: 100%;
    padding: 13px;
    background: linear-gradient(135deg, #7C3AED 0%, #9D5BFF 100%);
    border: none; border-radius: 12px;
    color: #fff; font-family: 'Inter', sans-serif;
    font-size: 15px; font-weight: 700;
    cursor: pointer; letter-spacing: 0.02em;
    box-shadow: 0 4px 20px rgba(124,58,237,0.45);
    transition: all 0.25s ease;
    margin-top: 2px;
  }
  .login-button:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,58,237,0.6); }
  .login-button:active { transform: translateY(0); }

  .divider {
    display: flex; align-items: center; gap: 12px;
    margin: 18px 24px 14px;
  }
  .divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.07); }
  .divider-text { font-size: 11px; color: #334155; white-space: nowrap; font-family: 'Inter', sans-serif; }

  .social-accounts { display: flex; justify-content: center; gap: 12px; padding: 0 24px; }
  .social-btn {
    width: 44px; height: 44px; border-radius: 12px;
    background: rgba(255,255,255,0.05);
    border: 1.5px solid rgba(255,255,255,0.09);
    color: #94A3B8;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.25s;
  }
  .social-btn:hover {
    background: rgba(124,58,237,0.15); border-color: rgba(124,58,237,0.35);
    color: #A78BFA; transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(124,58,237,0.2);
  }

  .agreement { text-align: center; margin: 14px 0 0; }
  .agreement a {
    font-size: 11px; color: #334155;
    font-family: 'Inter', sans-serif; text-decoration: none; transition: color 0.2s;
  }
  .agreement a:hover { color: #7C3AED; }
`;

export default LoginForm;