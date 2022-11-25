import '../styles/globals.css'
import { Navigation } from './components/navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
