import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  category: string;
}

export default function ProjectCard({ title, image, link, category }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
        >
          View Project →
        </a>
      </div>
      <div className="p-4 bg-white">
        <h4 className="text-gray-800 font-semibold truncate">{title}</h4>
        <span className="text-xs text-purple-600 font-medium">{category}</span>
      </div>
    </div>
  );
}
