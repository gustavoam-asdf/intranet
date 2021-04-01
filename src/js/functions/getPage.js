import createCSSLink from './createCSSLink.js'

const getPage = async page => {
  const readPage = await fetch(`/pages/${page}.html`)
  if (!readPage.ok) throw new Error('There was an error reading the file')
  return {
    name: page,
    text: await readPage.text(),
    styleLink: createCSSLink(`/src/css/pages/${page}.css`)
  }
}

export default getPage
