import Navbar from "./Navbar";
import CaptionedImage from "./CaptionedImage";

interface PageHeaderProps {
  title: string;
  org?: string;
  intro: string;
  coverPhoto: string;
  coverCaption?: React.ReactNode;
}

export default function PageHeader({ title, org, intro, coverPhoto, coverCaption }: PageHeaderProps) {
  return (
    <header className="w-full">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-0 flex flex-col gap-4">
        <h1 style={{ fontSize: '48px' }}>{title}</h1>
        {org && <h2 className="font-bold" style={{ fontSize: '32px', color: '#555' }}>{org}</h2>}
        <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>{intro}</p>
        <CaptionedImage
          src={coverPhoto}
          alt={`${title} cover photo`}
          width={768}
          height={576}
          caption={coverCaption}
          className="mt-4"
        />
      </div>
    </header>
  );
}
