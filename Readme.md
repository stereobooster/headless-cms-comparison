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

## Contributing

If your CMS is not listed here, feel free to add it.

1. Create a new folder named CMS-name in the root folder.
2. Add `docker-compose.yml`
3. Add a new entry to `Readme.md`
