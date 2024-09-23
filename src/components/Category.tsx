import Image from "next/image";
import Link from "next/link";

export default function Category({ category }: any) {
  return (
    <>
      <Link href={`/categories/${category}`}>
        <h1>{category}</h1>
      </Link>
    </>
  );
}
