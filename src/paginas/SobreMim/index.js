import styles from './SobreMim.module.css'

import PostModelo from "../../componentes/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobreMim from '../../assets/sobre_mim_foto.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, sou o Paná Tsilfidis!
            </h3>

            <img 
                src={fotoSobreMim} 
                alt='Foto Paná Tsilfidis sorrindo'
                className={styles.fotoSobreMim}
            />


            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu estou iniciando minha carreira com desevolvedor Front-End.
            </p>
            <p className={styles.paragrafo}>
                Minha carreira na programação começou aos 18 anos quando fiz meu primeiro curso de IDE Delphi 7. Ao mesmo tempo trabalhava com técnico de manutenção em computadores.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior segui o caminho da Geografia, onde tive a oportunidade de me aprofundar nos códigos scripts das aplicalções usadas durante o curso.
            </p>
            <p className={styles.paragrafo}>
                Depois de formado, assumir vaga de cocurso público na Universidade Federal da Grande Dourados, como Técnico em Geotecnologia.
             </p>
            <p className={styles.paragrafo}>
                Atualmente exercendo a mesma função me deparei com a necessidade de programar, então me despertou a vontade de me aprofundar novamente na área de desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Sou bolsista na Alura através do projeto Oracle Next Education.
            </p>

        </PostModelo>
    )
}