const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Objects {
            allDatoCmsObject {
                nodes {
                    url
                    category {
                        url
                    }
                }
            }
            allDatoCmsCategory {
                nodes {
                    url
                }
            }
        }
    `)
    
    data.allDatoCmsObject.nodes.forEach(node => {
        const { url, category } = node;
        actions.createPage({
            path: `/objects/${category.url}/${url}`,
            component: path.resolve('./src/templates/object.js'),
            context: { url }
        })
    })

    data.allDatoCmsCategory.nodes.forEach((node) => {
        const { url } = node;
        actions.createPage({
            path: `/objects/${url}`,
            component: path.resolve('./src/templates/category.js'),
            context: { url }
        })
    });
}