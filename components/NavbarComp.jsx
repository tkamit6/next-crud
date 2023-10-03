import Link from 'next/link'

export default function NavbarComp() {
  return (
    <nav className='flex justify-between px-8 py-3 items-center bg-slate-800'>
        <Link className='text-white font-bold' href={'/'}>GT Coding</Link>
        <Link className='bg-white p-2' href={'/addTopic'}>Add Topic</Link>
    </nav>
  )
}
