function getCreatorLink(id: number): string {
  const creatorLink = `/creators/${id.toString()}`;
  return creatorLink;
}

export default getCreatorLink;
