//calculadora criada com factory function
const calculator = document.querySelector('.calculadora');


const result = document.querySelector('.btn-eq');

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
     


        inicia() {
            this.cliqueBotoes();   
            this.pressionaEnter();
        },
              
        cliqueBotoes() {
            document.addEventListener('click',  (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.result();
                }
                this.display.focus();
            });
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        deleteOne(valor) {
            this.display.value = this.display.value.slice(0, -1);
        },

        result() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                } 
                this.display.value = String(conta);
            } catch (e) {                
                alert('Conta inválida');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                   this.result();                    
                }               
            });
        }
    };
}
 
const calculadora = criaCalculadora();
calculadora.inicia();

/*
CALCULADORA FEITA COM CONSTRUCTOR FUNCTION
//calculadora criada com factory function

const calculator = document.querySelector('.calculadora');
const result = document.querySelector('.btn-eq');

function Calculadora() {
        this.display = document.querySelector('.display'); 

        this.inicia = () => {
            this.cliqueBotoes();   
            this.pressionaEnter();
        };
              
        this.cliqueBotoes = () => {
            document.addEventListener('click',  e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if (el.classList.contains('btn-clear'))this.clearDisplay();
                if (el.classList.contains('btn-del')) this.deleteOne();
                if (el.classList.contains('btn-eq'))this.result();
                this.display.focus();
            });
        };
        
        this.btnParaDisplay = (el) => this.display.value += el;   
        this.clearDisplay = () => this.display.value = ' ';
        this.deleteOne = (valor) => this.display.value = this.display.value.slice(0, -1);

        this.result = () => {
            try {
            let conta = eval(this.display.value);
        
                if (!conta) {
                    alert('Conta inválida');
                    return;
                } 
                this.display.value = String(conta);
            } catch (e) {                
                alert('Conta inválida');
                return;
            }
        };

        this.pressionaEnter = () => {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                   this.result();                    
                }               
            });
        };
    
}
 
const calculadora = new Calculadora();
calculadora.inicia();

*/