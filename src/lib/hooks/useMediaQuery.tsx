import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">useMediaQuery</h1>
      <p className="mb-6">Resize your browser window to see changes.</p>
      <article>
        {isSmallDevice && (
          <figure className="bg-blue-500 text-white p-8 rounded-lg text-center">
            <figcaption className="text-2xl font-semibold">
              Small Device
            </figcaption>
            <p className="mt-2">Screen width: ≤ 768px</p>
          </figure>
        )}
        {isMediumDevice && (
          <figure className="bg-green-500 text-white p-8 rounded-lg text-center">
            <figcaption className="text-2xl font-semibold">
              Medium Device
            </figcaption>
            <p className="mt-2">Screen width: 769px - 992px</p>
          </figure>
        )}
        {isLargeDevice && (
          <figure className="bg-purple-500 text-white p-8 rounded-lg text-center">
            <figcaption className="text-2xl font-semibold">
              Large Device
            </figcaption>
            <p className="mt-2">Screen width: 993px - 1200px</p>
          </figure>
        )}
        {isExtraLargeDevice && (
          <figure className="bg-orange-500 text-white p-8 rounded-lg text-center">
            <figcaption className="text-2xl font-semibold">
              Extra Large Device
            </figcaption>
            <p className="mt-2">Screen width: ≥ 1201px</p>
          </figure>
        )}
      </article>
    </section>
  );
}