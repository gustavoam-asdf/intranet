import createCSSLink from './createCSSLink.js'
import createJSLink from './createJSLink.js'

const getPage = async page => {
  const readPage = await fetch(`./src/pages/${page}.html`)
  if (!readPage.ok) throw new Error('There was an error reading the file')
  return {
    name: page,
    html: await readPage.text(),
    styleLink: createCSSLink(`/src/css/pages/${page}.css`),
    scriptLink: createJSLink(`/src/js/pages/${page}.js`)
  }
}

export default getPage
