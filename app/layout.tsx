import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D-Rocks Dynamic Drywall Repair LLC | Sussex County NJ",
  description:
    "Professional drywall installation, finishing, repairs, and painting in Sussex County NJ. 12 years experience. Clean, honest, respectful work. Free estimates - call or text 973-552-8051.",
  keywords:
    "drywall repair, drywall installation, painting, carpentry, Sussex County NJ, handyman",
  metadataBase: new URL("https://drocksllc.com"),
  openGraph: {
    title: "D-Rocks Dynamic Drywall Repair LLC",
    description:
      "Professional drywall and painting services in Sussex County NJ. Free estimates!",
    type: "website",
    url: "https://drocksllc.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
