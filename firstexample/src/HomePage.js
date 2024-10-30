import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '200px' }}>
        <center>
            
            <Link to='/dashboard'>
            <button>HomePageDashboardPage</button>
            </Link>
        </center>

      
    </div>
  )
}

export default HomePage
