import axios from 'axios'

let api

async function getToken() {
  let tokenMedicalAesthetics = localStorage.getItem('tokenMedicalAesthetics')

  let expirationDate = localStorage.getItem('expirationDate')
  const isTokenExpired = new Date().getTime() > Number(expirationDate)

  if (!tokenMedicalAesthetics || !expirationDate || isTokenExpired) {
    const response = await axios.post(
      'https://cloud.squidex.io/identity-server/connect/token',
      {
        scope: 'squidex-api',
        client_secret: 'zosadlioc7dpmj5hmtsx3we38boki80ebzwpexa3ctcx',
        client_id: 'medical-aesthetics:default',
        grant_type: 'client_credentials'
      },
      {
        headers: {
          ['Content-Type']: 'application/x-www-form-urlencoded'
        }
      }
    )

    tokenMedicalAesthetics = response.data.access_token
    expirationDate = new Date().getTime() + 2591999 * 1000

    localStorage.setItem('tokenMedicalAesthetics', tokenMedicalAesthetics)
    localStorage.setItem('expirationDate', expirationDate)
  }
  return tokenMedicalAesthetics
}

export async function createSquidexService() {
  if (api) {
    return api
  }
  const tokenMedicalAesthetics = await getToken()
  api = axios.create({
    baseURL: `https://cloud.squidex.io/api/content/medical-aesthetics/`,
    headers: {
      Authorization: `Bearer ${tokenMedicalAesthetics}`,
      ['X-ResolveUrls']: '*'
    }
  })
  return api
}

export async function getHomepage(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('homepage/c86cd1b1-cc43-4979-bfe6-b26c27d1fe4c', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('homepage/c86cd1b1-cc43-4979-bfe6-b26c27d1fe4c', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}

export async function getTopLevel(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('top-level/a4496a34-488e-4239-9c2c-a4df0e9670ac', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('top-level/a4496a34-488e-4239-9c2c-a4df0e9670ac', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}

export async function getAboutPage(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('about-page/acc34fe1-0259-430c-9698-438c8e4d3526', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('about-page/acc34fe1-0259-430c-9698-438c8e4d3526', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}

export async function getPricesPage(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('prices-page/2bff9fdb-ab2a-4f0c-b329-a2caa18fb9ac', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('prices-page/2bff9fdb-ab2a-4f0c-b329-a2caa18fb9ac', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}

export async function getPromoPage(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('promo-page/fcf0019f-9785-4317-953b-9e31b2219ab4', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('promo-page/fcf0019f-9785-4317-953b-9e31b2219ab4', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}

export async function getContactsPage(urlPreview, selectedLanguage) {
  if (urlPreview) {
    return api.get('contacts-page/9355f01c-10a6-4009-9e81-bf2b22bf32d9', {
      headers: { 'X-Unpublished': 1 }
    })
  }
  return api.get('contacts-page/9355f01c-10a6-4009-9e81-bf2b22bf32d9', {
    headers: { 'X-Languages': `${selectedLanguage}` }
  })
}
