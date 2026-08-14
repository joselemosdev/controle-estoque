import { Routes } from '@angular/router';
import { Categorias } from './pages/categorias/categorias';
import { CategoriaForm } from './pages/categorias/components/categoria-form/categoria-form';
import { FornecedorForm } from './pages/fornecedores/components/fornecedor-form/fornecedor-form';
import { Fornecedores } from './pages/fornecedores/fornecedores';
import { Home } from './pages/home/home';
import { ProdutoForm } from './pages/produtos/components/produto-form/produto-form';
import { Produtos } from './pages/produtos/produtos';

export const routes: Routes = [
    { path: "", component: Home },

    // Produtos
    { path: "produtos", component: Produtos },
    { path: "produtos/new", component: ProdutoForm },
    { path: "produtos/:id/edit", component: ProdutoForm },
    { path: "produtos/:id/view", component: ProdutoForm },

    // Categorias
    { path: "categorias", component: Categorias },
    { path: "categorias/new", component: CategoriaForm },
    { path: "categorias/:id/edit", component: CategoriaForm },
    { path: "categorias/:id/view", component: CategoriaForm },


    // Fornecedores
    { path: "fornecedores", component: Fornecedores },
    { path: "fornecedores/new", component: FornecedorForm },
    { path: "fornecedores/:id/edit", component: FornecedorForm },
    { path: "fornecedores/:id/view", component: FornecedorForm },
];
