const request = async params => {
  const response = await fetch(process.env.NEXT_PUBLIC_AXELARSCAN_API_URL, { method: 'POST', body: JSON.stringify(params) }).catch(error => { return null })
  return response && await response.json()
}

export const getChains = async () => request({ method: 'getChains' })
export const getAssets = async () => request({ method: 'getAssets' })
export const getContracts = async () => request({ method: 'getContracts' })
