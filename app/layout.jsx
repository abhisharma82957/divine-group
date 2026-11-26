
import "./globals.css";
import { Header, Footer } from "../components/Site";

export const metadata = {
  title: {
    default: "Divine Group of Companies",
    template: "%s | Divine Group of Companies",
  },
  description: "Divine Group of Companies",
  verification: {
  google: "oNRHgtbEHHjW-Xk8O_LsUvkGoDYtHP5O7ilX1RmWlhk",
},
  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
