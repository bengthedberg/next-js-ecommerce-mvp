import { Nav, NavLink } from "@/components/Nav"

export const dynamic = "force-dynamic"

// Layout Component for public facing customer pages
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}