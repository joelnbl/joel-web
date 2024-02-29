const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={project.image} alt={project.name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
          <p className="mt-2 text-gray-500">{project.description}</p>
          <div className="mt-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    name: 'Portfolio',
    description: 'My personal portfolio built with Next.js and TailwindCSS',
    image: 'https://placehold.co/600x400',
    githubLink: 'url-to-github-repo',
    websiteLink: 'url-to-live-website'
  },
  {
    name: 'Virent',
    description: 'A platform to help people to find a rent place',
    image: 'https://placehold.co/600x400',
    githubLink: 'url-to-github-repo',
    websiteLink: 'url-to-live-website'
  }
]

export default function Page() {
  return (
    <section>
        <div className="projects">
      {projects.map(project => <ProjectCard key={project.name} project={project} />)}
    </div>
    </section>
  )
}