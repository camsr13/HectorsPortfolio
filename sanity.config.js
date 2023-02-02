// Single workspace configuration

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import blockContent from './studio/schemas/blockContent'
import category from './studio/schemas/category'
import navigation from './studio/schemas/documents/navigation'
import siteConfig from './studio/schemas/siteConfig'
import Clients from './studio/schemas/documents/Clients'
import About from './studio/schemas/documents/About'
import Projects from './studio/schemas/documents/Projects'
import navItem from './studio/schemas/objects/navItem'
import link from './studio/schemas/objects/link'
import projectImages from './studio/schemas/objects/projectImages'
import projectDisciplines from './studio/schemas/objects/projectDisciplines'

export default defineConfig({
  projectId: '36om7i3d',
  basePath: '/studio',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
      navigation,
      Clients,
      About,
      siteConfig,
      navItem,
      link,
      Projects,
      projectImages,
      projectDisciplines,
      category,
      blockContent,
    ],
  },
})
