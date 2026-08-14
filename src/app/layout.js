import { Montserrat, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import JsonLdScript from "@/components/shared/json_ld_script";
import { organizationSchema, websiteSchema } from "@/data/json_ld";
import { SITE_URL } from "@/data/site_config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Roofer SEO Co. Roofing SEO & Reputation Specialists",
  description:
    "We help roofing contractors build a five-star reputation, rank higher in local search, and turn more homeowners into booked calls,with a system built only for roofers.",
  openGraph: {
    title: "Roofer SEO Co. Roofing SEO & Reputation Specialists",
    description:
      "We help roofing contractors build a five-star reputation, rank higher in local search, and turn more homeowners into booked calls.",
    url: SITE_URL,
    siteName: "Roofer SEO Co.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Roofer SEO Co. — roofing SEO and reputation specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofer SEO Co. Roofing SEO & Reputation Specialists",
    description:
      "We help roofing contractors build a five-star reputation, rank higher in local search, and turn more homeowners into booked calls.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffcf2] text-[#252422] font-body">
        <JsonLdScript schema={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
