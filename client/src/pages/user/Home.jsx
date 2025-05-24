import React from "react";

function Home() {
  return (
    <div>
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/heroimg.png")' }}
      >
        <div className="container mx-auto h-full px-4 py-20 flex flex-col justify-end">
          <div>
            <h1 className="text-white text-3xl border-primary border-b-1 pb-4">
              Cindo Intrenational <br /> Marine Trading
            </h1>
            <p className="text-white mt-4 w-full text-md mb-4 lg:w-1/2">
              Siap menjadi mitra terpercaya untuk menghadirkan alat berat
              berkualitas. bergerak lebih cepat, lebih kuat, lebih unggul.
            </p>
          </div>
          {/* Informasi tambahan */}
          <div className="flex justify-start items-center mt-2 gap-6 lg:justify-end">
            <div>
              <p className="text-md font-medium text-white mb-2">Location</p>
              <p className="text-sm text-white">Cengkareng, DKI Jakarta</p>
            </div>
            <div>
              <p className="text-md font-medium text-white mb-2">Email</p>
              <p className="text-sm text-white">cimtjkt@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center px-4 py-20 container mx-auto">
        <div>
          <img
            src="/images/heroimg.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className>About Us</h1>
          <p className="text-md text-gray-700">
            Kami adalah perusahaan yang bergerak di bidang perdagangan alat berat
            dan suku cadang. Kami menyediakan berbagai produk berkualitas tinggi
            untuk memenuhi kebutuhan industri konstruksi dan pertambangan.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
