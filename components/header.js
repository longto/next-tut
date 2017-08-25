import Link from 'next/link'
export default () => (
    <div>
        <Link href="/about"><a>About</a></Link>
        <Link href="/"><a>Home</a></Link>
        <Link href="/todos"><a>Todo</a></Link>
    </div>
)