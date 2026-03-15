import { type ReactNode } from 'react'
import './AppLayout.css'
import Sidebar from '../Sidebar/Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
