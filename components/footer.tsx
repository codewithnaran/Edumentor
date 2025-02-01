import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EduMentor</h3>
            <p className="text-muted-foreground">
              Empowering learners with AI-driven personalized education.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-foreground hover:text-primary"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-foreground hover:text-primary"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; 2025 EduMentor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
