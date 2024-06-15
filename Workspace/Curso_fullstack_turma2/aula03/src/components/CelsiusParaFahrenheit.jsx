import React from 'react'

const CelsiusParaFahrenheit = ({celsius}) => {
    const Fahrenheit = (celsius * 9/5) + 32;
  return (
    <div className="conversao">
        <p>{celsius}°C é o mesmo que {Fahrenheit}°F </p>
    </div>
  )
}

export default CelsiusParaFahrenheit