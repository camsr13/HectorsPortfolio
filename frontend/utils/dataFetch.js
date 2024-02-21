export default async function fetchData(query, id) {
  let originalQuery
  if (!id) {
    originalQuery = encodeURIComponent(`*[ _type == '${query}']`)
  } else {
    originalQuery = encodeURIComponent(
      `*[ _type == '${query}' && id == '${id}']`
    )
  }
  const projectURL = `https://vgbsv8ys.api.sanity.io/v1/data/query/production?query=[${originalQuery}]`
  return await fetch(projectURL).then((res) => res.json())
}
