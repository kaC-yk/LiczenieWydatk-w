import Footer from "./footer";
import {Header} from "./header";
export default function DashboardLayout({
  children,href
}: {
children: React.ReactNode
  href: string
}) {
  return (
         
    <div className="flex flex-col min-h-screen">
       
 
      <main className="flex-grow">{children}</main>
        <Header/>
        <Footer />
    </div>
  )
}
       
     
      
 