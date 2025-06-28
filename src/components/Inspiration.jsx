export default function Inspiration() {
    const quotes = [
        {
            text: "There are no moral phenomenon just moral interpretations.",
            author: "Friedrich Nietzsche",
        },
        {
            text: "A fish with it's mouth closed never get caught.",
            author: "Unknown",
        },
        {
            text: "The root of all suffering are desires.",
            author: "Buddha",
        },
        {
            text: "My Lord, Forgive my small jokes on you and I'll forgive your big ones on me.",
            author: "Robert Frost",
        },
        {
            text: "The only way out is through.",
            author: "Robert Frost",
        },
    ];

    const spotifyPlaylists = [
        {
            title: "Let's love a little more",
            url: "https://open.spotify.com/embed/playlist/5bQLaaxwec6zPtEp1I64xP?utm_source=generator&theme=0",
        },
        {
            title: "Give me some sunshine",
            url: "https://open.spotify.com/embed/playlist/3Vf7Fo0wGJAhzVpqU02eO7?utm_source=generator&theme=0",
        },
        {
            title: "Ajib Dastan Hai Yeh",
            url: "https://open.spotify.com/embed/playlist/1G4ygFdWqpmZK3UYcHwquh?utm_source=generator&theme=0",
        },
        {
            title: "Qawali & Sufi",
            url: "https://open.spotify.com/embed/playlist/39oqQtGLe5r9lUK3w4tOZ8?utm_source=generator&theme=0",
        },
    ];

    const books = [
        {
            title: "Life is short, so is this book",
            author: "Peter Atkins",
        },
        {
            title: "12 Rules Of Life",
            author: "Jordan Peterson",
        },
        {
            title: "Man's Search for Meaning",
            author: "Viktor Frankl",
        },
        {
            title: "59 Seconds, Think a Little",
            author: "Richard Wiseman",
        },
    ];

    return (
        <div className="min-h-[100vh] mt-10 space-y-20 bg-black px-4 py-12 text-zinc-300">
            {/* Quotes */}
            <section>
                <h2 className="mb-6 text-2xl md:text-4xl font-semibold">
                    💬 Favorite Quotes
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {quotes.map((quote, i) => (
                        <div
                            key={i}
                            className="relative rounded-xl border border-zinc-700 bg-white/5 p-6 text-zinc-100 shadow-lg backdrop-blur-md transition-all duration-300"
                        >
                            <div className="text-5xl text-zinc-400">“</div>
                            <p className="mt-2 text-lg italic">
                                {" "}
                                {quote.text} ”
                            </p>
                            <p className="mt-4 text-right text-sm text-zinc-400">
                                – {quote.author}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spotify Playlists */}
            <section>
                <h2 className="mb-6 text-2xl md:text-4xl font-semibold">
                    🎧 Favorite Playlists
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {spotifyPlaylists.map((playlist, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-lg transition-transform duration-300"
                        >
                            
                            <iframe
                                title={playlist.title}
                                src={playlist.url}
                                width="100%"
                                height="352"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </section>

            {/* Books */}
            <section>
                <h2 className="mb-6 text-2xl md:text-4xl font-semibold">
                    📚 Favorite Books
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book, i) => (
                        <div
                            key={i}
                            className="relative flex items-start overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-lg transition-all duration-300"
                        >
                            <div className="h-full w-2 rounded-r-md bg-yellow-600 shadow-md" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {book.title}
                                </h3>
                                <p className="mt-1 text-sm text-zinc-400">
                                    by {book.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
