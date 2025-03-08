import RootLayout from "./RootLayout"; // ✅ Import Client Component

export const metadata = {
  title: "Beera Jewellers",
  description: "The Finest Collection of Jewellery",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
