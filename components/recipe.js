import { useState } from "react";
import _ from "lodash";

const button = "border border-solid border-gray-300 px-2 py-1 rounded mr-2";
const selectedButton = `${button} bg-blue-100 border-blue-200 text-gray-600`;

export default function Recipe({ recipe }) {
  const [portions, setPortions] = useState(1);

  return (
    <>
      <div className="mb-4">
        <h1>{recipe.title}</h1>
        <p className="mt-2">
          <button
            className={portions === 0.5 ? selectedButton : button}
            onClick={() => setPortions(0.5)}
          >
            Puolikas
          </button>
          <button
            className={portions === 1 ? selectedButton : button}
            onClick={() => setPortions(1)}
          >
            Normaali
          </button>
          <button
            className={portions === 2 ? selectedButton : button}
            onClick={() => setPortions(2)}
          >
            Tupla
          </button>
        </p>
      </div>

      <div className="md:grid grid-cols-8">
        <section className="col-span-3 mb-4 p-4 border border-solid border-blue-200 rounded bg-blue-100 text-gray-600 text-base">
          <h2 className="leading-none mb-2 uppercase text-sm tracking-wider">
            Ainekset
          </h2>
          <ul className="p-0">
            {recipe.ingredients.map((ing) => (
              <li key={ing.ingredient} className="mb-1">
                <div className="flex">
                  <div className="w-24">
                    {ing.quantity && (
                      <span className="font-bold">
                        {ing.quantity * portions}
                      </span>
                    )}
                    {ing.unit && ` ${ing.unit}`}
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

        <section className="recipe col-span-5 md:pl-8 p-4">
          <div dangerouslySetInnerHTML={{ __html: recipe.contentHtml }} />
        </section>
      </div>
    </>
  );
}
