const createJSLink = src => {
  const script = document.createElement('script')
  script.setAttribute('src', src)
  return script
}

export default createJSLink
