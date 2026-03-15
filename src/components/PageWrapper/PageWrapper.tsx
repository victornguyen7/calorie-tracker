/**
 * PageWrapper Component
 * 
 * WHAT: Reusable wrapper component that provides consistent page header styling and layout
 * 
 * HOW:
 * - Accepts title, description, icon, and children as props
 * - Renders a header section with optional icon and title
 * - Uses conditional rendering for optional props (description, icon)
 * - Wraps page content with proper semantic structure
 * - Provides consistent styling across all pages
 * 
 * TECH STACK:
 * - React 19.2.4 - Component framework with React.FC pattern
 * - TypeScript - Interface for props type definition
 * - ReactNode - For typing children prop
 * - CSS3 - Animations and flexbox layout
 */

import { type ReactNode } from 'react'
import './PageWrapper.css'

/**
 * PageWrapperProps Interface
 * WHAT: Type definition for PageWrapper component props
 * Properties:
 * - title (required): Page title string
 * - description (optional): Page subtitle/description
 * - children (required): Page content to render
 * - icon (optional): Emoji or icon string to display next to title
 */
interface PageWrapperProps {
  title: string
  description?: string
  children: ReactNode
  icon?: string
}

/**
 * PageWrapper Functional Component
 * WHAT: Renders page wrapper with header and content area
 * HOW:
 * - Destructures props from interface
 * - Uses conditional rendering (&&) for optional elements
 * - Wraps children in page-content div for styling
 * TECH: React functional component, TypeScript, destructuring
 */
const PageWrapper = ({ title, description, children, icon }: PageWrapperProps) => {
  return (
    <div className="page-wrapper">
      {/* 
        Page Header Section
        WHAT: Contains icon and title information
        HOW: Flexbox layout with icon (optional) and title section
        TECH: Conditional rendering for optional icon
      */}
      <div className="page-header">
        {/* 
          Icon Display - Only renders if icon prop is provided
          WHAT: Emoji or icon next to page title
          HOW: Conditional rendering using && operator
          TECH: React conditional rendering, CSS styling
        */}
        {icon && <span className="page-icon">{icon}</span>}
        
        {/* Title Section with description */}
        <div className="page-title-section">
          {/* Page Title - Main heading for the page */}
          <h1 className="page-title">{title}</h1>
          
          {/* 
            Page Description - Only renders if description prop is provided
            WHAT: Subtitle or descriptive text
            HOW: Conditional rendering using && operator
            TECH: React conditional rendering
          */}
          {description && <p className="page-description">{description}</p>}
        </div>
      </div>

      {/* 
        Page Content Section
        WHAT: Container for all page-specific content
        HOW: Renders children prop with fade-in animation
        TECH: React children prop, CSS animations
      */}
      <div className="page-content">
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
