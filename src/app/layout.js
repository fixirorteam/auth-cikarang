
import "./globals.css";

export const metadata = {
  title: "FIXIROR AUTH",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <main>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}