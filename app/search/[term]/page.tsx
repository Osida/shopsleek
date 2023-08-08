type Props = {
  params: {
    term: string;
  };
};

export default function page({ params }: Props) {
  return (
    <main>
      <h1>Search results page {params.term}</h1>
      {/* Results List */}
    </main>
  );
}
