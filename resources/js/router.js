import  Vue from 'vue';
import VueRouter from 'vue-router';
import  LoginComponent from './components/LoginComponent';
import  AdminComponent from './components/AdminComponent';
import TestAdminComponent from './components/TestAdminComponent';
import BaseComponent from './components/BaseComponent';
Vue.use(VueRouter)


const routes =[
    {
        path: '/',
        redirect: '/testadmin'
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
    }

]

export default  new VueRouter({routes})
