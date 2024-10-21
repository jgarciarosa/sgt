import { useEffect, useState } from 'react';
import './grid.css'
import axios from 'axios';

interface Task {
    id: number,
    title: string,
    description: string,
    status: boolean
}

const Grid: React.FC = () => {
    const [data, setData] = useState<Task[]>([]);
    const [filter, setFilter] = useState<'all' | 'finished' | 'unfinished'>('all');

    // Fetch todas tarefas
    useEffect(() => {
        axios.get('http://localhost:8080/api/task')
        .then((response) => setData(response.data))
        .catch((error) => console.error('Erro ao buscar tarefas:', error));
    }, []);

    // Função para filtrar todas tarefas, concluídas e não concluídas
    const filterData = (data: Task[]) => {
        if (filter === 'finished') {
            return data.filter((task) => task.status === true);
        } else if (filter === 'unfinished') {
            return data.filter((task) => task.status === false);
        }
        
        return data;
    };

    return (
        <>
            <div>
                <h1>Sistema de Gerenciamento de Tarefas</h1>
                <div>
                     {/* Botões fora do Grid */}
                    <div className="buttons">
                        <button onClick={() => setFilter('all')}> 
                            Mostrar todas 
                        </button>
                        <button onClick={() => setFilter('finished')}> 
                            Mostrar concluídas 
                        </button>
                        <button onClick={() => setFilter('unfinished')}> 
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
                    <tbody>
                        {filterData(data).map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status ? 'Concluída' : 'Não Concluída'}</td>
                                <td>
                                    <span className='edit-button'>Editar</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default Grid;