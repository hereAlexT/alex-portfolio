// components/Layout.tsx
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'



interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-16 mx-auto max-w-3xl">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout