/**
 * Serialises a schema.org graph into the page. The `<` escape is what keeps a
 * stray `</script>` inside any of the copy from closing the tag early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
