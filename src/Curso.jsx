import React from 'react'
import PropTypes from 'prop-types'

const mayorDeEdad = edad => edad > 18

const persona = {
    "nombre":"Alberto",
    "apellido":"Quiroga",
    "edad":"29"
}

const Curso = ({title, image, price, profesor}) => (
    <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt={title} />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {/* puede devolver jscript o html */}
                    {mayorDeEdad(persona.edad) ? "Soy mayor de edad" : <p>Soy menor</p>}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <div class="card__avatar s-mr-1">
                            <div class="circle img-container">
                                <img src={profesor} alt="" />
                            </div>
                        </div>
                        <span class="small">{`${persona.nombre} ${persona.apellido}`} </span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="#">{`${price}`}</a>
                </div>
            </div>
        </article>   
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro titulo",
    image: "https://cdn.slidesharecdn.com/ss_thumbnails/presentaciondefaultmac-sept-171115024926-thumbnail-4.jpg?cb=1510714658",
    price: "--",
    profesor: ""
}

export default Curso