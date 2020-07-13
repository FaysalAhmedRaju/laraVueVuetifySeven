import  Vue from 'vue';
import VueRouter from 'vue-router';
import  LoginComponent from './components/LoginComponent';
import  AdminComponent from './components/AdminComponent';
import TestAdminComponent from './components/TestAdminComponent';
import BaseComponent from './components/BaseComponent';
import TestBaseComponent from './components/TestBaseComponent';
Vue.use(VueRouter)


const routes =[
    {
        path: '/',
        redirect: '/testbase'
    },
    {
        path: '/login',
        component: LoginComponent,
        name: 'Login'
    },
    {
        path: '/admin',
        component: AdminComponent,
        name: 'Admin'
    },
    {
        path: '/testadmin',
        component: TestAdminComponent,
        name: 'testadmin'
    },{
        path: '/base',
        component: BaseComponent,
        name: 'base'
    },{
        path: '/testbase',
        component: TestBaseComponent,
        name: 'testbase'
    }

]


export default  new VueRouter({routes})
