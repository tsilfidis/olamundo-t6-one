import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Panagiotis Alexandro Tsilfidis, geógrafo servidor público. Atualmente estudando desenvolvimento web Front-End.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    alt='Circulo colorido de fundo da foto de perfil'
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Paná Tsilfidis'
                />
            </div>
        </div>
    );
}