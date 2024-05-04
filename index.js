// @ts-nocheck
window.onload = function () {
        let btns = document.querySelectorAll('button')
        btns.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                        let res = document.querySelector('.res')
                        if (btn.classList.contains('number') || btn.classList.contains('sinal')) {

                                
                                if (res.textContent == 'ERROR') {
                                        res.textContent = e.target.textContent
                                        
                                } else {
                                          res.textContent += e.target.textContent
                                        
                                }
                                const igualbtn = document.querySelector('.igual')
                                igualbtn.addEventListener('click', () => {
                                                if (String(res.textContent)[0]==='.') {
                                                        res.textContent = 'ERROR'
                                                        console.clear()
                                                        return
                                                } else {
                                                        res.textContent = eval(res.textContent)
                                                }
                                                
                                        }) 
                               
                        } else if (e.target.textContent == 'Del') {
                                 res.textContent = ''
                        }

                     

                       
                })
        })
}