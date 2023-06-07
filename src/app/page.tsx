import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      Hello Nextjs
      <Link href="/sign-up">
        <button>Sign up</button>
      </Link>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}
