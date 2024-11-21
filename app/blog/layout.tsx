import AboutBlogMe from "@/components/blog/about-me-card";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="min-h-screen bg-background font-mono px-6 ">
<div className="grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:max-w-5xl mx-auto">
  <div className="lg:h-screen lg:sticky lg:top-0  pt-12 flex flex-col space-y-6 ">
    <AboutBlogMe/>
  </div>
  <div className="pb-6 lg:pt-12  lg:space-y-36 space-y-12">
      {children}
  </div>
</div>
</div> 
  );
}




