import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  alt: string;
  company: string;
  timeline: string;
  images: string[];
};

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    
    {
      id: 1,
      title: "Cœur d'Orphelins",
      alt: "NGO Platform",
      company: "",
      timeline: "",
      images: ["coeur1.jpg", "coeur2.jpg", "coeur3.jpg", "coeur4.jpg", "coeur5.jpg",
        "coeur6.jpg", "coeur7.jpg", "coeur8.jpg", "coeur9.jpg", "coeur10.jpg"],
    },
     {
      id: 2,
      title: "Slegal User",
      alt: "Business, Law consultation",
      company: "",
      timeline: "",
      images: ["slegal1.jpg", "slegal2.jpg", "slegal3.jpg", "slegal4.jpg", "slegal5.jpg", 
        "slegal6.jpg", "slegal7.jpg", "slegal8.jpg", "slegal9.jpg", "slegal10.jpg"],
    },
     {
      id: 3,
      title: "None R",
      alt: "Food Delivery,VTC Taxi",
      company: "",
      timeline: "",
      images: ["NoneR1.jpg", "NoneR2.jpg", "NoneR3.jpg", "NoneR4.jpg", "NoneR5.jpg",
        "NoneR6.jpg", "NoneR7.jpg", "NoneR8.jpg", "NoneR9.jpg", "NoneR10.jpg", "NoneR11.jpg", "NoneR12.jpg",
        "NoneR13.jpg", "NoneR14.jpg", "NoneR15.jpg", "NoneR16.jpg", "NoneR17.jpg", "NoneR18.jpg", "NoneR19.jpg", "NoneR20.jpg", "NoneR21.jpg", "NoneR22.jpg"],
    },
     {
      id: 4,
      title: "None C",
      alt: "Food Delivery,VTC Taxi",
      company: "",
      timeline: "",
      images: ["NoneC1.jpg", "NoneC2.jpg", "NoneC3.jpg", "NoneC4.jpg", "NoneC5.jpg",
        "NoneC6.jpg", "NoneC7.jpg", "NoneC8.jpg", "NoneC9.jpg", "NoneC10.jpg", "NoneC11.jpg", "NoneC12.jpg",
        "NoneC13.jpg", "NoneC14.jpg", "NoneC15.jpg", "NoneC16.jpg", "NoneC17.jpg", "NoneC18.jpg", "NoneC19.jpg", "NoneC20.jpg", "NoneC21.jpg"],
    },
    {
      id: 5,
      title: "None F",
      alt: "Food Delivery,VTC Taxi",
      company: "",
      timeline: "",
      images: ["NoneF1.jpg", "NoneF2.jpg", "NoneF3.jpg", "NoneF4.jpg", "NoneF5.jpg",
        "NoneF6.jpg", "NoneF7.jpg", "NoneF8.jpg", "NoneF9.jpg", "NoneF10.jpg", "NoneF11.jpg", "NoneF12.jpg",
        "NoneF13.jpg", "NoneF14.jpg", "NoneF15.jpg",]
    },
    {
      id: 6,
      title: "Vibel",
      alt: "Dating,Social",
      company: "",
      timeline: "",
      images: ["vibel1.jpeg", "vibel2.jpeg", "vibel3.jpeg", "vibel4.jpeg", "vibel5.jpeg",
        "vibel6.jpeg", "vibel7.jpeg", "vibel8.jpeg"],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxImage ? "hidden" : "auto";
  }, [lightboxImage]);

  return (
    <>
      <Head>
        <title>Projects | Gowtham A</title>
        <meta
          name="description"
          content="Modern, clean gallery of React Native projects"
        />
      </Head>

      <main className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="mt-2 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Worked on multiple mobile application projects for France-based SaaS companies using React Native during the period 2020 to 2021.
             </p>
          </header>

          <div className="space-y-14">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500">{project.company}</p>
                    <p className="text-xs text-gray-400">{project.timeline}</p>
                  </div>
                  <button
                    className="ml-4 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                    onClick={() => toggleExpand(project.id)}
                  >
                    {expandedProject === project.id
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                </div>

                {/* Modal for Image Preview */}
                {lightboxImage && (
                  <div
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setLightboxImage(null)}
                  >
                    <div
                      className="relative bg-white rounded-2xl shadow-2xl p-5 max-w-4xl w-[90%] animate-fade-in max-h-[90vh] overflow-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
                        aria-label="Close image"
                      >
                        <FiX size={28} />
                      </button>

                      {/* Centered Image */}
                      {/* <div className="flex justify-center items-center w-full">
                        <Image
                          src={lightboxImage}
                          alt="Zoomed Preview"
                          width={300}
                          height={800}
                          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto object-contain rounded-xl"
                          priority
                        />
                      </div> */}
                    </div>
                  </div>
                )}

                {expandedProject === project.id && (
                  <>
                    <div className="mb-4 text-gray-700">
                      <p>
                        More details about <strong>{project.title}</strong> go
                        here. You can add descriptions, features, links, etc.
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <div className="flex gap-4 pb-2">
                        {project.images.map((img, index) => (
                          <div
                            key={index}
                            className="min-w-[200px] max-w-[200px] aspect-[16/9]rounded-xl cursor-pointer group border border-gray-200 shadow-md hover:shadow-lg transition-shadow mr-10"
                            onClick={() => setLightboxImage(`/images/${img}`)}
                          >
                            <Image
                              src={`/images/${img}`}
                              alt={`${project.alt} ${index + 1}`}
                              width={180}
                              height={100}
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-xl"
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
