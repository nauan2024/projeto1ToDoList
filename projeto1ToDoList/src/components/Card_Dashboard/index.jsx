export default function Card_Dashboard({ title, value, borderColor }) {
  return (
    <article className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${borderColor}`}>
        //serve para integrar texto com variaveis {}
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-texto mt-2">{value}</p>
    </article>
  );
}