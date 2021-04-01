const getPage = async page => {
  const readPage = await fetch(`/pages/${page}.html`)
  if (!readPage.ok) throw new Error('There was an error reading the file')
  return await readPage.text()
}

export default getPage
