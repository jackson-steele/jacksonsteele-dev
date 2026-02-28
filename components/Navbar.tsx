import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-3 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/nav-icon.png"
          alt="Jackson Steele"
          width={36}
          height={36}
        />
      </Link>
      <div className="flex items-center gap-6">
        <a
          href="mailto:jacksonsteele8@gmail.com"
          className="text-base font-medium text-black hover:underline"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/jackson-steele/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-black hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="/Jackson%20Steele%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-black hover:underline"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
