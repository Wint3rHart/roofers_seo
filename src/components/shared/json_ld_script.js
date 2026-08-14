/**
 * Renders one or more schema.org objects as application/ld+json script tags.
 * Accepts a single schema object or an array of schema objects.
 */
export default function JsonLdScript({ schema }) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
