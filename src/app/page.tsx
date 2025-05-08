import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  
  // Color palette for dynamic backgrounds
  const getRandomColor = () => {
    const colors = [
      'bg-gradient-to-r from-pink-500 to-rose-500',
      'bg-gradient-to-r from-indigo-500 to-purple-500',
      'bg-gradient-to-r from-green-400 to-emerald-500',
      'bg-gradient-to-r from-amber-500 to-orange-500',
      'bg-gradient-to-r from-cyan-500 to-blue-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Colorful Header */}
        <div className={`${getRandomColor()} p-8 text-center`}>
          <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-lg animate-pulse">
            Code Snippet Playground
          </h1>
          <p className="mt-3 text-white/80 text-xl font-medium">
            Collect, Organize, Inspire
          </p>
        </div>

        {/* Action Section */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              My Colorful Snippets
            </h2>
            <Link href='/snippet/new'>
              <Button className="bg-gradient-to-r from-pink-600 to-red-600 text-white hover:from-pink-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                + Create Vibrant Snippet
              </Button>
            </Link>
          </div>

          {snippets.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
              <div className="text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                🚀
              </div>
              <p className="text-2xl font-bold text-gray-600">
                Your snippet adventure begins here!
              </p>
              <p className="text-gray-500 mt-2">
                Click &quot;Create Vibrant Snippet&quot; to start
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {snippets.map((snippet) => (
                <div 
                  key={snippet.id} 
                  className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`h-2 ${getRandomColor()}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {snippet.title}
                      </h3>
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Snippet
                      </div>
                    </div>
                    <Link href={`/snippet/${snippet.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 border-indigo-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                      >
                        Explore Snippet
                      </Button>
                    </Link> 
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
