import Skills from "../components/Skills";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
          <p className="text-xl mb-4 text-gray-300">
            I'm Ahmet Kurt, a third-year computer engineering student at Izmir Institute of Technology. I am passionate about web development, cybersecurity, and machine learning.
          </p>
          <p className="text-xl mb-4 text-gray-300">
            I have experience in front-end development with Vue and React. I am also interested in cybersecurity and machine learning.
          </p>
          <p className="text-xl text-gray-300">
            I'm always eager to learn new technologies and apply my knowledge to solve real-world problems.
          </p>
        </div>
        <Skills />
      </div>
    </main>
  );
}
