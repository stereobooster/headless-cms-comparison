# Headless CMS comparison

Continuation of my [post about Headless CMS comparison](https://dev.to/stereobooster/headless-graphql-cms-51id).

Comparison of open source headless CMS. Inspired by [MicheleBertoli/css-in-js](https://github.com/MicheleBertoli/css-in-js).

## Features

More ticks doesn't mean "better", it depends on your needs.

|        | GraphQL | Mutations | Custom Fields | D&D Editor | Rich Text Editor | Group Fields | Media Library | Image Manipulation | Image Crops | Asset CDN | Previews | Releases | Localization | Localized fields | Revision history | Webhooks |
| ------ | ------- | --------- | ------------- | ---------- | ---------------- | ------------ | ------------- | ------------------ | ----------- | --------- | -------- | -------- | ------------ | ---------------- | ---------------- | -------- |
| Prime  | ✅      | ✅        | ✅            | ✅         | ✅               | ✅           | 3rd-party     | 3rd-party          | ✅          | 3rd-party | ✅       | ✅       | ✅           | ❌               | ✅               | ✅       |
| Strapi | ✅      | ❌        | ✅            | ❌         | ✅               | ❌           | 3rd-party     | 3rd-party          | ❌          | 3rd-party | ❌       | ❌       | ❌           | ❌               | ❌               | ✅       |

## Alternatives

- https://github.com/netlify/headlesscms.org/tree/master/content/projects
- https://github.com/gentics/headless-cms-comparison
- http://www.cmsmatrix.org/
- https://docs.primecms.app/#/features
- [List of content management systems](https://en.wikipedia.org/wiki/List_of_content_management_systems)

## Contributing

If your CMS is not listed here, feel free to add it.

1. Create a new folder named CMS-name in the root folder.
2. Add `docker-compose.yml`
3. Add a new entry to `Readme.md`

## Other

### Database to API

- [hasura](https://hasura.io/) - Instant Realtime GraphQL on Postgres
- [PostGraphile](https://www.graphile.org/postgraphile/) - Instantly spin-up a GraphQL API server by pointing PostGraphile at your existing PostgreSQL database
- [PostgREST](http://postgrest.org) is a standalone web server that turns your PostgreSQL database directly into a RESTful API
- [tuql](https://github.com/bradleyboy/tuql) is a simple tool that turns a sanely formatted sqlite database into a graphql endpoint

### Admin generators

- [administrate](https://github.com/thoughtbot/administrate) RoR
- [godmin](https://github.com/varvet/godmin) RoR
- [activeadmin](https://github.com/activeadmin/activeadmin) RoR
- [rails_admin](https://github.com/sferik/rails_admin) RoR
- [trestle](https://github.com/TrestleAdmin/trestle) RoR
- [react-admin](https://github.com/marmelab/react-admin) React
- [canner](https://github.com/Canner/canner) React and co
