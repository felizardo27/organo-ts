import './CampoTexto.css'

interface CampoTextoProps {
    obrigatorio?: boolean;
    tipo?: 'text' | 'password' | 'email' | 'number' | 'date';
    label: string;
    placeholder: string;
    valor: string;
    aoAlterado: (valor: string) => void;
}

const CampoTexto = ({ aoAlterado, label, obrigatorio = false, placeholder, valor, tipo = 'text' }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto