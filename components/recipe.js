export default function Recipe({ recipe }) {
  return (
    <>
      <div className="mb-4">
        <h1>{recipe.title}</h1>
        {recipe.duration && <p>Kesto: {recipe.duration} min</p>}
        {recipe.complexity && <p>Vaiva: {recipe.complexity}</p>}
      </div>

      <div className="grid grid-cols-3">
        <section className="col-span-1 mb-4 p-4 border border-solid border-blue-200 rounded bg-blue-100 text-gray-600 text-base">
          <h2 className="leading-none mb-2 uppercase text-sm tracking-wider">
            Ainekset
          </h2>
          <ul className="p-0">
            {recipe.ingredients.map((ing) => (
              <li key={ing.ingredient}>
                <div className="flex">
                  <div className="w-24">
                    <span className="font-bold">{ing.quantity}</span> {ing.unit}
                  </div>
                  <div>{ing.ingredient}</div>
                </div>
                {ing.details && (
                  <div className="pl-24 text-xs">({ing.details})</div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="col-span-2 pl-8 p-4">
          <h2 className="text-sm leading-none mb-2">Ohje</h2>
          <div dangerouslySetInnerHTML={{ __html: recipe.contentHtml }} />
        </section>
      </div>
    </>
  );
}
