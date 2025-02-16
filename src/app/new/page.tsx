import Image from "next/image";
import Link from "next/link";

export default function NewTodo() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex w-2/3 justify-between">
        <Link href="/">
          <h1 className="text-3xl font-semibold">Todo App</h1>
        </Link>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form className="flex flex-col gap-4 w-full">
          <label className="block font-medium text-gray-300">
            Todo Title
            <input
              className="mt-1 text-gray-800 px-2 block w-full transition duration-200 ease-in-out outline-none rounded-md"
              type="text"
              name="title"
              placeholder="Enter title"
              required
            />
          </label>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Add Todo
          </button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://shubham-s-socials.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Connect with me
        </a>
      </footer>
    </div>
  );
}
