const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="my-6 p-6">
        <div className="text-center">
          <p>Built and designed by Anibal Laura</p>
          <p className="text-sm">© {currentYear} My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;