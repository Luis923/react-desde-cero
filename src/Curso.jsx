import React from 'react'

const Curso = () => (
    <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src="https://edteam-media.s3.amazonaws.com/courses/big/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png" alt="" />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    Programación orientada a objetos con Go
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <div class="card__avatar s-mr-1">
                            <div class="circle img-container">
                                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/d5060642-11c9-49cb-9029-fc0a3bf8ff94.png" alt="" />
                            </div>
                        </div>
                        <span class="small">Alexys Lozada</span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
                </div>
            </div>
        </article>   
)

export default Curso;