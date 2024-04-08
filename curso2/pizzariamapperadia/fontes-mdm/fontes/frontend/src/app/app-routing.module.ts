import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';


export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: ''},

    // Auth routes for guests
    // {
    //     path: '',
    //     canMatch: [NoAuthGuard],
    //     component: SideNavComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
    //         {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
    //         {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
    //         {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
    //         {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
    //     ]
    // },

    // Auth routes for authenticated users
    // {
    //     path: '',
    //     canMatch: [NoAuthGuard],
    //     component: SideNavComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
    //         {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
    //     ]
    // },

    // Admin routes
    {
        path: '',
        canMatch: [NoAuthGuard],
        component: SideNavComponent,
        children: [
	{ path: 'cartaoConsumo', loadChildren: () => import('./modules/cartao-consumo/cartao-consumo.module' ).then(m => m.CartaoConsumoModule) },
	{ path: 'cliente', loadChildren: () => import('./modules/cliente/cliente.module' ).then(m => m.ClienteModule) },
	{ path: 'cadastroCliente', loadChildren: () => import('./modules/cadastro-cliente/cadastro-cliente.module' ).then(m => m.CadastroClienteModule) },
	{ path: 'cartaoCliente', loadChildren: () => import('./modules/cartao-cliente/cartao-cliente.module' ).then(m => m.CartaoClienteModule) },
	{ path: 'categoria', loadChildren: () => import('./modules/categoria/categoria.module' ).then(m => m.CategoriaModule) },
	{ path: 'cozinha', loadChildren: () => import('./modules/cozinha/cozinha.module' ).then(m => m.CozinhaModule) },
	{ path: 'endereco', loadChildren: () => import('./modules/endereco/endereco.module' ).then(m => m.EnderecoModule) },
	{ path: 'garcon', loadChildren: () => import('./modules/garcon/garcon.module' ).then(m => m.GarconModule) },
	{ path: 'itemPedido', loadChildren: () => import('./modules/item-pedido/item-pedido.module' ).then(m => m.ItemPedidoModule) },
	{ path: 'menu', loadChildren: () => import('./modules/menu/menu.module' ).then(m => m.MenuModule) },
	{ path: 'opcional', loadChildren: () => import('./modules/opcional/opcional.module' ).then(m => m.OpcionalModule) },
	{ path: 'pagamento', loadChildren: () => import('./modules/pagamento/pagamento.module' ).then(m => m.PagamentoModule) },
	{ path: 'pedido', loadChildren: () => import('./modules/pedido/pedido.module' ).then(m => m.PedidoModule) },
	{ path: 'produto', loadChildren: () => import('./modules/produto/produto.module' ).then(m => m.ProdutoModule) },
	{ path: 'tipoPagamento', loadChildren: () => import('./modules/tipo-pagamento/tipo-pagamento.module' ).then(m => m.TipoPagamentoModule) },
        ]
    },
];
