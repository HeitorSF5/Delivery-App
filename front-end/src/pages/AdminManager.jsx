import React from 'react';
import AdmRegisterForm from '../components/AdmRegisterForm';
import NavBar from '../components/NavBar';

export default function AdminManager() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   try {

  //   } catch(error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main>
      <NavBar />
      Admin Page
      {/* <form onSubmit={ handleSubmit }>

      </form> */}
      <AdmRegisterForm />
    </main>
  );
}
