import { SearchPage } from "@/features";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${searchParams?.query} | Araya Arts Store`,
    description:
      "Araya Arts | Handmade Custom Notebooks and other art materials",
  };
}
const Search = () => {
  return (
    <>
      <SearchPage />
    </>
  );
};

export default Search;
