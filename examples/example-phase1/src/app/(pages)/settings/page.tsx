import Link from 'next/link'
import { ReactNode } from 'react'

const Settings = ({ children }: { children: ReactNode }) => (
    <div className="p-4">
        <h1>Settings</h1>
        <div>
            <Link href='/settings/user' className='pr-4'>User Page</Link>
            <Link href='/settings/blog'>Blog Page</Link>
        </div>
        <div className="grow">{children}</div>
    </div>
)
export default Settings
