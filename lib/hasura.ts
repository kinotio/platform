type HasuraVariables = { [key: string]: string | number }

const hasuraEnvironment = Object.freeze({
  url: process.env.NEXT_PUBLIC_HASURA_URL,
  secret: process.env.NEXT_PUBLIC_HASURA_SECRET
})

const hasura = {
  execute: async ({ query, variables }: { query: string; variables?: HasuraVariables }) => {
    const response = await fetch(hasuraEnvironment.url, {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': hasuraEnvironment.secret
      },
      body: JSON.stringify({
        query,
        variables
      })
    })

    const data = await response.json()

    return data
  }
}
