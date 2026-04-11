import Link from "next/link";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 style={{ fontSize: "120px", lineHeight: 1, marginBottom: "16px" }}>404</h1>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>Page not found</h2>
        <p style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)", marginBottom: "40px" }}>
          Nothing here yet — check back soon, or head back home.
        </p>
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
