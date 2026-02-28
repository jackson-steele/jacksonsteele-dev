import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/images/profile-picture.png"
            alt="Jackson Steele"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold" style={{ fontSize: '40px' }}>Want to learn more?</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:jacksonsteele8@gmail.com"
              className="btn btn-primary"
            >
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/jackson-steele/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
