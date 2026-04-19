import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header activeTab="الرئيسية" />
      
      {/* المحتوى الرئيسي المتغير للصفحات سيوضع هنا */}
      <main className="flex-grow bg-white">
         {/* مساحة عمل الصفحة الحالية */}
      </main>

      <Footer />
    </div>
  );
}
