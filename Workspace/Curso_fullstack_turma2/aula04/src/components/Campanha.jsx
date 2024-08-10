import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicídio"
        } else if (mes === "outubro") {
            return "Prevenção do cancer de mama das mulheres"

        } else if (mes === "novembro") {
            return "Prevenção de cancer de próstata"

        }
    }

    function defineCorDeFundo(mes) {
        if (mes === "setembro") {
            return styles.setembro
        } else if (mes === "outubro") {
            return styles.outubro

        } else if (mes === "novembro") {
            return styles.novembro

        }

    }


  return (
    <div className={defineCorDeFundo(props.mes)}>
        <p>{defineMensagem(props.mes)}</p>
        


    </div>
  )
}

export default Campanha