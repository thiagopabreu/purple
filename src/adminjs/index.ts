import { sequelize } from './../database/index';
import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { adminjsResources } from './resources';

AdminJS.registerAdapter(AdminJSSequelize)

export const adminjs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: adminjsResources,
    branding: {
      companyName: 'Purple',
      logo: '/assets/purple_icon.png',
      theme: {
        colors: {
          primary100: '#8b73ff',
          primary80: '#937dff',
          primary60: '#a491ff',
          primary40: '#beb0ff',
          primary20: '#d5ccff',
          grey100: '#00000',
          grey80: '#cdcccf',
          grey60: '#adadad',
          grey40: '#737373',
          grey20: '#525252',
          filterBg: '#000000',
          accent: '#000000',
          hoverBg: '#000000'
      }}}
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminjs)