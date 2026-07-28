import { Routes } from '@angular/router';
import { Categorias } from './pages/categorias/categorias';
import { Fornecedores } from './pages/fornecedores/fornecedores';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "produtos", component: Produtos },
    { path: "categorias", component: Categorias },
    { path: "fornecedores", component: Fornecedores },

];
