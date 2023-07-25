import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'seg1 layout',
  description: 'seg1 description',
}

const Seg1Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="seg1-layout p-8">
      {children}
    </div>
  )
}

export default Seg1Layout;
