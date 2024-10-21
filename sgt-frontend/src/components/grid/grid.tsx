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
    const [modalOpen, setModalOpen] = useState(false);
    const [taskSelected, setTaskSelected] = useState<Task | null>(null);
    const [newTask, setNewTask] = useState<{ title: string; description: string }>({
        title: '',
        description: '',
    });

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

    // Função para Adicionar nova Tarefa
    const handleAddTaskClick = () => {
        setNewTask({ title: '', description: '' });
        setModalOpen(true);
    };

    // Função para Alterar dados de uma Tarefa
    const handleEditTaskClick = (task: Task) => {
        setTaskSelected(task);
        setModalOpen(true);
    };

    // Função para mudar campos do modal quando for para cirar nova Tarefa ou alterar uma Tarefa
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (taskSelected) {
            setTaskSelected({ ...taskSelected, [name]: value });
        } else {
            setNewTask({ ...newTask, [name]: value });
        }
    };

    //Função para fechar o modal
    const closeModal = () => {
        setModalOpen(false);
        setTaskSelected(null);
    };

    // Função para salvar dados na api
    const handleSave = () => {
        if (taskSelected) {
            // Atualizando Tarefa selecionada
            axios
            .put(`http://localhost:8080/api/task/${taskSelected.id}`, taskSelected)
            .then(() => {
              setData((prevDados) =>
                prevDados.map((task) =>
                  task.id === taskSelected.id ? taskSelected : task
                )
              );
              closeModal();
            })
            .catch((error) => console.error('Erro ao atualizar tarefa:', error));
        } else {
          // Criando nova Tarefa
          axios
            .post('http://localhost:8080/api/task', {
              title: newTask.title,
              description: newTask.description,
              status: false,
            })
            .then((response) => {
              setData((prevDados) => [...prevDados, response.data]);
              closeModal();
            })
            .catch((error) => console.error('Erro ao criar tarefa:', error));
        }
    };

    // Função para deletar Tarefa na api
    const handleDelete = () => {
        if (taskSelected) {
            const confirmDelete = window.confirm(
                `Tem certeza de que deseja excluir a tarefa: ${taskSelected.title}?`
            );
            if (confirmDelete) {
                axios
                .delete(`http://localhost:8080/api/task/${taskSelected.id}`)
                .then(() => {
                    setData((prevDados) =>
                        prevDados.filter((task) => task.id !== taskSelected.id)
                    );
                    closeModal();
                })
                .catch((error) => console.error('Erro ao excluir tarefa:', error));
            }
        }
    };

    // Função para alternar o status da tarefa na api e no front
    const changeStatus = async (id: number) => {

        const task = data.find((task) => task.id === id);

        if (task) {
            const newStatus = !task.status;
            try {
                // Fazendo requisição PUT para atualizar o status na API
                await axios.put(`http://localhost:8080/api/task/${id}`, {
                    ...task,
                    status: newStatus,
                });
          
                // Atualizando o status no frontend
                setData((prevDados) =>
                    prevDados.map((task) =>
                        task.id === id ? { ...task, status: newStatus } : task
                    )
                );
            } catch (error) {
                console.error("Erro ao atualizar o status da tarefa na API:", error);
            }
        }
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
                        <button  onClick={handleAddTaskClick}> 
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
                                <td>
                                    <span onClick={(e) => {
                                        e.stopPropagation();
                                        changeStatus(task.id);
                                    }}>
                                        {task.status ? 'Concluída' : 'Não Concluída'}
                                    </span>
                                </td>
                                <td>
                                    <span className='edit-button' onClick={() => handleEditTaskClick(task)}>
                                        Editar
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Modal */}
                {modalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>{taskSelected ? 'Editar Tarefa' : 'Criar Nova Tarefa'}</h3>
                            <label>
                                Título:
                                <input type="text" name="title" value={taskSelected ? taskSelected.title : newTask.title} onChange={handleChange}/>
                            </label>
                            <label>
                                Descrição:
                                <input type="text" name="description" value={taskSelected ? taskSelected.description : newTask.description} onChange={handleChange}/>
                            </label>
                            <button className='save-button' onClick={handleSave}>
                                Salvar
                            </button>
                            <button className="cancel-button" onClick={closeModal}>
                                Cancelar
                            </button>
                            {taskSelected && (
                            <button className='delete-button' onClick={handleDelete}>
                                Excluir
                            </button>
                            )}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default Grid;