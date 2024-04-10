const TentangKami = () => {
  return (
    <section id="tentangkami-section">
      <div className="relative mt-20 dark:border-b dark:border-neutral-800 border-white min-h-[800px]">
        <div className="text-center">
            <span className="text-[#fb0103] rounded-full h-6 text-sm font-medium px-1 py-1 uppercase">
            {/* Feature */}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide dark:text-white">
                LET US HELP{" "}
            <span className="bg-gradient-to-r from-[#fb0103] to-orange-800 text-transparent bg-clip-text">
                YOUR COMPANY
            </span>
            </h2>
        </div>
      <div className="flex flex-wrap mt-10 lg:mt-15">
        <div className="flex">
            <div>
                <p className="text-xl sm:text-lg leading-relaxed text-justify p-3 mb-23 dark:text-neutral-500">
                <span className="pl-8">Berdiri</span> sejak tahun 2020 di Jakarta, diresmikan oleh Notaris Bambang Ariawan, SH, dengan fokus utama pada perdagangan barang dan jasa. Salah satu bidang yang kami tekuni adalah pengembangan alat kesehatan dan alat laboratorium. Dengan semangat kerja keras dan komitmen yang kuat untuk terus berkembang, PT. Berkah Indo Ratama bertekad untuk terus mengembangkan potensi dan unit bisnisnya. Kami berkomitmen untuk terus memperluas jangkauan serta meningkatkan kualitas pelayanan kami. Saat ini, kami telah dikenal sebagai perusahaan terpercaya dalam pengadaan Alat Kesehatan dan Alat Laboratorium di Indonesia.
                </p>
            </div>
        </div>
       
        {/* {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))} */}
    </div>
        <div className="grid grid-cols-2 gap-4 mt-14">
            <div>
                <h5 className="text-center dark:text-neutral-500">VISI</h5>
                <p className="text-sm leading-relaxed text-justify p-3 mb-23 dark:text-neutral-500">
                    Menjadi perusahaan yang dapat diandalkan dan menjadi
                    Perusahaan Perdagangan Barang dan Jasa yang terbaik dan terpercaya di Indonesia
                </p>
            </div>
            <div>
                <h5 className="text-center dark:text-neutral-500">MISI</h5>
                <p className="text-sm leading-relaxed text-justify p-3 mb-23 dark:text-neutral-500">
                    PT. Berkah Indo Ratama senantiasa mengutamakan kualitas
                    dalam melayani para pelanggan.
                    PT. Berkah Indo Ratama senantiasa membina dan memelihara hubungan kerja
                    yang baik dengan pelanggan maupun mitra kerja.
                </p>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default TentangKami;
