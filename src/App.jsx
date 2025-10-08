import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import QuoteForm from './components/stage1/QuoteForm';
import SchedulingForm from './components/stage2/SchedulingForm';
import InformationForm from './components/stage3/InformationForm';
import ConfirmationForm from './components/stage4/ConfirmationForm';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quote" replace />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/schedule" element={<SchedulingForm />} />
          <Route path="/information" element={<InformationForm />} />
          <Route path="/confirmation" element={<ConfirmationForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
