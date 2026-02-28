export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 text-center border-t border-gray-200">
      <p className="text-base text-gray-500" style={{ fontSize: '16px' }}>
        © {year} Jackson Steele
      </p>
    </footer>
  );
}
