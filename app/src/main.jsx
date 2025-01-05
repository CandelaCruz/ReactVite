import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Casa from './Componentes/Casa/Casa';
import RecipeHistory from './Componentes/RecipeHistory/RecipeHistory';
import Nav from './Componentes/Nav/Nav';
import CardList from './Componentes/RecipePopular/CardList/CardList';
import About from './Componentes/About/About';
import Footer from './Componentes/Footer/Footer';
import CreateRecipe from './Componentes/CreateRecipe/CreateRecipe';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nav/>
 <Casa/>
 <CardList/>
 <About />
 <CreateRecipe/>
 <RecipeHistory/>
 <Footer/>
  </StrictMode>,
)
