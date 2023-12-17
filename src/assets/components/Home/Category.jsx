import styles from './Body.module.scss'
import '../../main.scss'

import imgCategoryBarba from '../../images/icons-categoria/barba.png'
import imgCategoryCabeloFem from '../../images/icons-categoria/cabelo-fem.png'
import imgCategoryCabeloMasc from '../../images/icons-categoria/cabelo-masc.png'
import imgCategoryCorpo from '../../images/icons-categoria/corpo.png'
import imgCategoryRosto from '../../images/icons-categoria/rosto.png'

const Category = ()=>{
    return(
        <div className='container'>
            <div className='section'>
                <h2 className='sectionTitle'>Busque por categorias:</h2>
                <ul className={styles.SectionCategoryList}>
                    <li className={styles.SectionCategoryListItem}>
                        <a href="#">
                            <img className={styles.SectionCategoryListItemImg} src={imgCategoryRosto} alt="Rosto" />
                            <h3 className={styles.SectionCategoryListItemTitle}>Rosto</h3>
                        </a>
                    </li>
                    <li className={styles.SectionCategoryListItem}>
                        <a href="#">
                            <img className={styles.SectionCategoryListItemImg} src={imgCategoryCorpo} alt="Corpo" />
                            <h3 className={styles.SectionCategoryListItemTitle}>Corpo</h3>
                        </a>
                    </li>
                    <li className={styles.SectionCategoryListItem}>
                        <a href="#">
                            <img className={styles.SectionCategoryListItemImg} src={imgCategoryCabeloFem} alt="Cabelo Feminino" />
                            <h3 className={styles.SectionCategoryListItemTitle}>Cabelo Feminino</h3>
                        </a>
                    </li>
                    <li className={styles.SectionCategoryListItem}>
                        <a href="#">
                            <img className={styles.SectionCategoryListItemImg} src={imgCategoryCabeloMasc} alt="Cabelo Masculino" />
                            <h3 className={styles.SectionCategoryListItemTitle}>Cabelo Masculino</h3>
                        </a>
                    </li>
                    <li className={styles.SectionCategoryListItem}>
                        <a href="#">
                            <img className={styles.SectionCategoryListItemImg} src={imgCategoryBarba} alt="Barba" />
                            <h3 className={styles.SectionCategoryListItemTitle}>Barba</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div> 
    )  
}

export default Category