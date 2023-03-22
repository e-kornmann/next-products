import { strict as assert } from "assert"
import contentfulManagement from "contentful-management"
import { EnvironmentGetter } from "contentful-typescript-codegen"

const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
assert(SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

const getContentfulEnvironment: EnvironmentGetter = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  const space = await contentfulClient
    .getSpace(SPACE_ID)
  return await space.getEnvironment(CONTENTFUL_ENVIRONMENT)
}

module.exports = getContentfulEnvironment;
