export function removeHTMLTags(str) {
  return str.replace(/<(.|\n)*?>/g, '').trim();
}
