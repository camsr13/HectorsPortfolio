// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import navigation from './documents/navigation'
import siteConfig from './siteConfig'
import Clients from './documents/Clients'
import About from './documents/About'
import Skills from './documents/Skills'
import Projects from './documents/Projects'

//Object Types
import navItem from './objects/navItem'
import link from './objects/link'
import projectImages from './objects/projectImages'
import projectDisciplines from './objects/projectDisciplines'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    navigation,
    Clients,
    About,
    Skills,
    siteConfig,
    navItem,
    link,
    Projects,
    projectImages,
    projectDisciplines,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
