import Layout from "../components/layout";

const ingredients = [
  {
    id: 0,
    quantity: 1,
    unit: "pkt",
    product: "Jalotofu maustamaton",
    description: "",
  },
  {
    id: 1,
    quantity: 225,
    unit: "g",
    product: "hummustahna",
    description: "",
  },
  {
    id: 2,
    quantity: 200,
    unit: "ml",
    product: "kaurakerma",
    description:
      "esim. Kaslink Kauraruoka juusto, pippuri tai paahdettu sipuli",
  },
  {
    id: 3,
    quantity: 1.5,
    unit: "tl",
    product: "suola",
  },
  {
    id: 4,
    quantity: 2,
    unit: "kynsi",
    product: "valkosipuli",
  },
  {
    id: 5,
    product: "mustapippuri",
    description: "myllystä",
  },
  {
    id: 6,
    quantity: 780,
    unit: "g",
    product: "tomaatti-valkosipulipastakastike",
    description: "2 * 390g purkki",
  },
];

export default function RecipeTemplate() {
  return (
    <Layout>
      <div className="mb-4">
        <h1>Nyhtökaurawokki</h1>
        <p>Kesto: 30 min</p>
        <p>Vaiva: 3</p>
      </div>

      <div className="grid grid-cols-3">
        <section className="col-span-1 mb-4 p-4 border border-solid border-blue-200 rounded bg-blue-100 text-gray-600 text-base">
          <h2 className="leading-none mb-2 uppercase text-sm tracking-wider">
            Ainekset
          </h2>
          <ul className="p-0">
            {ingredients.map((ing) => (
              <li key={ing.id}>
                <div className="flex">
                  <div className="w-24">
                    <span className="font-bold">{ing.quantity}</span> {ing.unit}
                  </div>
                  <div>{ing.product}</div>
                </div>
                {ing.description && (
                  <div className="pl-24 text-xs">({ing.description})</div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="col-span-2 pl-8 p-4">
          <h2 className="text-sm leading-none mb-2">Ohje</h2>
          <ol>
            <li>Laita uuni lämpiämään 200 asteeseen.</li>
            <li>
              Levitä leikkuulaudan päälle puhdas keittiöpyyhe tai pari kerrosta
              talouspaperia. Ota tofu pois pakkauksesta ja leikkaa se
              pituussuunnassa puoliksi ja aseta palat vierekkäin pyyhkeen
              keskelle, ja kääri kevyesti paketiksi. Puristele pakettia, jotta
              saat tofusta irti mahdollisimman paljon nestettä. Näin se imee
              itseensä mahdollisimman paljon makuja. Poista pyyhe tai paperit
              tofun ympäriltä.
            </li>
            <li>
              Murustele tofu kulhoon melko hienoksi muruksi. Lisää hummus,
              kaurakerma ja mausteet. Sekoita lusikalla tasaiseksi seokseksi.
              Tämä on valkokastikkeesi.
            </li>
            <li>Öljyä lasagnevuoka.</li>
            <li>Levitä sen pohjalle puolet toisesta tomaattikastikkeesta.</li>
            <li>Levitä kastikkeen päälle lasagnelevyjä.</li>
            <li>
              Levitä näiden päälle puolet tofu-hummus-kaurakermaseoksesta, eli
              valkokastikeesta.
            </li>
            <li>
              Levitä tämän päälle loput ensimmäisestä tomaattikastikeesta. Voit
              levittää sen tasaiseksi lastalla.
            </li>
            <li>
              Levitä kerros lasagnelevyjä, loput valkokastikkeesta ja puolet
              toisesta tomaattikastikkeesta näiden päälle.
            </li>
            <li>Levitä tomaattikastikkeen päälle puolet juustoraasteesta.</li>
            <li>
              Viimeiseksi levitä lasagnelevyjen päälle loput
              tomaattikastikkeesta (halutessasi voit jatkaa sitä pienellä
              määrällä vettä, jotta lasagnen pinnasta tulee kostea).
            </li>
            <li>Levitä juustoraaste tomaattikastikkeen päälle tasaisesti.</li>
            <li>
              Paista lasagnea uunissa ensin kannella tai foliolla peitettynä
              noin 20 minuuttia ja tämän jälkeen vielä noin 30 minuuttia, tai
              kunnes sen pinta saa kauniin ruskeaa väriä.
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}
