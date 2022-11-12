// const getSummonerData = async (cookies: NextCookies) => {
//   // const region = cookies.get("region");
//   console.log(cookies);
//   // const response = await axios.get("http://127.0.0.1:4040/api/champions");
// };

export default function SummonerPage({
  params,
  searchParams,
}: {
  params: { region: String };
  searchParams: { id: String };
}) {
  return <div>page</div>;
}
