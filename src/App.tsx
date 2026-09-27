import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { MenuHub } from './pages/MenuHub';
import { ModulePage } from './pages/ModulePage';
import { MythsPage } from './pages/MythsPage';
import { QuizPage } from './pages/QuizPage';
import { ReferencesPage } from './pages/ReferencesPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuHub />} />
          
          {/* Módulos Educativos Estruturados */}
          <Route path="/entenda" element={<ModulePage moduleId="entenda" />} />
          <Route path="/sintomas" element={<ModulePage moduleId="sintomas" />} />
          <Route path="/fisioterapia-movimento" element={<ModulePage moduleId="fisioterapia-movimento" />} />
          <Route path="/qualidade-de-vida" element={<ModulePage moduleId="qualidade-de-vida" />} />
          
          {/* Mitos e Verdades */}
          <Route path="/mitos-verdades" element={<MythsPage />} />
          
          {/* Quiz Educativo */}
          <Route path="/quiz" element={<QuizPage />} />
          
          {/* Referências Bibliográficas */}
          <Route path="/referencias" element={<ReferencesPage />} />
          
          {/* Fallback de rotas desconhecidas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
