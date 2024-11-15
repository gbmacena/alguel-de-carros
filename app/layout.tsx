import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Car Hub",
  description: "Descubra o melhor aplicativo de vitrine de carros do mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
