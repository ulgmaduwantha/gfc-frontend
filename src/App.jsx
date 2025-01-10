import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './Components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard name="iphone" price = "$9.99" image = "https://chinthanagsm.lk/wp-content/uploads/2024/10/iphone-x-1.jpg"></ProductCard>
    <ProductCard name="laptop" price = "$100" image = "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/hero-image.fill.size_1248x702.v1723100793.jpg" />
    <ProductCard name="gimble" price = "$255" image = "https://wildclickz.com/wp-content/uploads/2022/01/djironin.jpg"/>
    </>
  )
}

export default App
