export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400 hover:text-green-400">
            Coded by Ahmet Kurt
          </div>
          <div className="text-sm text-gray-400">Copyright © {new Date().getFullYear()}</div>
          <div className="text-sm text-gray-400">
            <a href="https://github.com/ahmetkurtms" className="hover:text-green-400">
              github.com/ahmetkurtms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
