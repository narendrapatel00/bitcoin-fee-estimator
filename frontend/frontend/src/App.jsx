import { useEffect, useState } from 'react'

function App() {
  const [fees, setFees] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
  fetch('http://172.17.206.14:3000/fees')


      .then(res => {
        if (!res.ok) throw new Error('Backend not reachable')
        return res.json()
      })
      .then(data => setFees(data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div style={{ padding: 30 }}>
      <h1>🪙 Bitcoin Fee Estimator</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!fees && !error && <p>Loading fees...</p>}

      {fees && (
        <div style={{ textAlign: 'left', maxWidth: 400 }}>
          <p><b>Fast:</b> {fees.fastestFee} sat/vB</p>
          <p><b>30 min:</b> {fees.halfHourFee} sat/vB</p>
          <p><b>1 hour:</b> {fees.hourFee} sat/vB</p>
          <p><b>Economy:</b> {fees.economyFee} sat/vB</p>
          <p><b>Minimum:</b> {fees.minimumFee} sat/vB</p>
        </div>
      )}
    </div>
  )
}

export default App
