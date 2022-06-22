import React from 'react';
import AdmRegisterForm from '../components/AdmRegisterForm';
import NavBar from '../components/NavBar';

export default function AdminManager() {
  return (
    <main>
      <NavBar />
      Admin Page
      <AdmRegisterForm />
    </main>
  );
}
