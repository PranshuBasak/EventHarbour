import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: ['latin'],
weight: ['400','500','600','700'],
variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'EventHarbour',
  description: 'EventHarbour is your ultimate port of call for seamless event planning and execution. Our platform offers a safe haven where event organizers, businesses, and marketing professionals can dock their ideas and navigate through a comprehensive suite of tools and features.  With EventHarbour, embark on a journey towards flawlessly orchestrated events. Experience the ease of centralizing your planning process, from venue selection and attendee management to promotion and post-event analytics. Our platforms intuitive design and robust functionalities ensure smooth sailing, allowing you to navigate the intricate details of event hosting effortlessly Set sail for success with EventHarbour’s tailored solutions, fostering connections, and enhancing collaborations. Whether youre seasoned planner or just dipping your toes into the event organizing waters, EventHarbour provides the harbor where your event dreams set sail towards reality. Welcome aboard to a world of unparalleled event hosting experiences.',
  icons: {
    icon: '/assets/SVG/Favicon-32x32.svg'
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
