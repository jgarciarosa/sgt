import './grid.css'

const Grid: React.FC = () => {

    return (
        <>
            <div>
                <h1>Sistema de Gerenciamento de Tarefas</h1>
                <div>
                     {/* Botões fora do Grid */}
                    <div className="buttons">
                        <button> 
                            Mostrar todas 
                        </button>
                        <button> 
                            Mostrar concluídas 
                        </button>
                        <button> 
                            Mostrar Não Concluídas 
                        </button>
                        <button> 
                            Adicionar nova Tarefa 
                        </button>
                    </div>
                    {/* Grid */}
                    <table>
                    <thead>
                        <tr>
                            <th className='title-column'>Titulo</th>
                            <th className='description-column'>Descrição</th>
                            <th className='status-column'>Status</th>
                            <th className='edit-column'></th>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
        </>
    )
}

export default Grid;