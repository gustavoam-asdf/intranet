const getPage = async page => {
  const readPage = await fetch(`/pages/${page}.html`)
  if (!readPage.ok) throw new Error('There was an error reading the file')
  return {
    name: page,
    text: await readPage.text(),
    styleLink: {}
  }
}

export default getPage
