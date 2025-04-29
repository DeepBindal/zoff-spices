export default function RootLayout({
    children,
  }) {
    return <div className="flex items-center justify-center bg-black min-h-screen w-full bg-dotted-pattern bg-cover bg-fixed bg-center">{children}</div>;
  }