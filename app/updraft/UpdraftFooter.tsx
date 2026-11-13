import Link from "next/link";

export default function UpdraftFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 px-6 text-center border-t border-gray-200 flex flex-col gap-2">
      <p className="text-gray-500" style={{ fontSize: "16px" }}>
        <Link href="/updraft/privacy-policy/" className="underline hover:text-black">
          Privacy Policy
        </Link>
      </p>
      <p className="text-gray-500" style={{ fontSize: "16px" }}>
        © {year} Jackson Steele
      </p>
    </footer>
  );
}
