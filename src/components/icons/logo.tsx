import Image from 'next/image'

import logo from '@/assets/logo.png'

const Logo = () => {
  return <Image src={logo} alt='Kinotio' width={100} height={100} />
}

export default Logo
