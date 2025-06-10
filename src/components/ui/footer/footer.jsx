function Footer({ className = "" }) {
  return (
    <footer className={`py-3 bg-dark ${className}`}>
      <div className="container text-center text-white">
        <p className="m-0">Made with ❤️ by Ironhack</p>
      </div>
    </footer>
  );
}

export default Footer;
