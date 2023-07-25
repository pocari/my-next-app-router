import Link from "next/link"

const Page = () => {
  return (
    <>
      <p>hello, world. in seg1</p>
      <Link href="/seg1/seg2">to seg2</Link>
    </>
  );
};

export default Page;
