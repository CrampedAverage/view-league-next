const getSummonerData = async (params: { name: string; region: string }) => {
  // const response = await axios.get("http://127.0.0.1:4040/api/champions");
};

export default async function SummonerPage({
  params,
  searchParams,
}: {
  params: { name: string; region: string };
  searchParams: { id: string };
}) {
  const summonerData = await getSummonerData(params);
  return <div>page</div>;
}
