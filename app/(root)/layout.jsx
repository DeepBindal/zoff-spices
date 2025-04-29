import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
  }) {
    return (
      <div className="flex h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    );
  }