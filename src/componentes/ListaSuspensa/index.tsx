import './ListaSuspensa.css'

interface listaSuspensaProps {
    obrigatorio: boolean;
    label: string;
    itens: string[];
    valor: string;
    aoAlterado: (valor: string) => void;
}

const ListaSuspensa = ({ obrigatorio, label, itens, valor, aoAlterado } :listaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa