import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
