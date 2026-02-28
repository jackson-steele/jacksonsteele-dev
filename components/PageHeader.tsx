import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  org: string;
  intro: string;
  coverPhoto: string;
}

export default function PageHeader({ title, org, intro, coverPhoto }: PageHeaderProps) {
  return (
    <header className="w-full">
      {/* Back link */}
      <div className="px-6 pt-6 pb-2">
        <Link
          href="/"
          className="text-base font-medium text-black hover:underline"
          style={{ fontSize: '16px' }}
        >
          ← Jackson Steele
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10 items-start">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 style={{ fontSize: '48px' }}>{title}</h1>
          <h2 className="text-gray-600 font-bold" style={{ fontSize: '32px', color: '#555' }}>
            {org}
          </h2>
          <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>{intro}</p>
        </div>
        {/* Right column */}
        <div className="flex-1">
          <Image
            src={coverPhoto}
            alt={`${title} cover photo`}
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </header>
  );
}
