const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-100">
        <p className="text-center text-xs/relaxed text-gray-500 mt-8 mb-8">
          &copy; {year}.- Joel Bello. All rights REVERSED
          <span className="block mt-2">Made with ❤️ in 🇻🇪</span>
        </p>
      </div>
    </footer>
  );
}
