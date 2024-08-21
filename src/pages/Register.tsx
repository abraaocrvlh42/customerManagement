// src/pages/Register.tsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>Register</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
