import AnimatedText from './components/AnimatedText'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Hello! I am Ahmet Kurt.</h1>
        <AnimatedText />
      </div>
    </main>
  )
}
