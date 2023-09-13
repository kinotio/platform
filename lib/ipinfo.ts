const ipinfoEnvironment = Object.freeze({
  url: process.env.NEXT_PUBLIC_IPINFO_URL,
  token: process.env.NEXT_PUBLIC_IPINFO_TOKEN
})

export const ipinfo = `${ipinfoEnvironment.url}?token=${ipinfoEnvironment.token}`
