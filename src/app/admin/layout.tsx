import { Nav, NavLink } from "@/components/Nav"

// Ignore all caching for admin pages, always render the page. 
// It is assumed the admoin paged will be used for frequent read operations 
// and from a location with fast internet connection.

export const dynamic = "force-dynamic"

// Admin Layout Component is different from the default layout.
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}