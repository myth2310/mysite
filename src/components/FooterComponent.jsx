export const FooterComponent = () => {
  return (
    <footer className="w-full text-dark">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-right text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Achmad Miftahudin.
        </div>
      </div>
    </footer>
  );
}
