export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea749073f79d2dcf893ec44',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eud1pfcc',
                  apiId: 'a1cbacb4-f972-4eac-86fd-bf2d2cf8baeb'
                },
                {
                  buildHookId: '5ea74907be844e0fc4507af5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uwxugo1f',
                  apiId: 'b695f44b-e5ce-474b-aced-814f530f8838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hladysheva/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uwxugo1f.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
