import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
