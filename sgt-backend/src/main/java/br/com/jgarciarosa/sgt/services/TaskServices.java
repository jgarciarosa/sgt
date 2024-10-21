package br.com.jgarciarosa.sgt.services;

import br.com.jgarciarosa.sgt.data.models.Task;
import br.com.jgarciarosa.sgt.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServices {

    @Autowired
    TaskRepository repository;

    public Task findById(Long id) {

        return repository.findById(id).orElseThrow();
    }

    public List<Task> findAll() {

        return repository.findAll();
    }

    public Task create(Task task) {

        return repository.save(task);
    }

    public Task update(Long id, Task task) {

        Task entity = repository.findById(id).orElseThrow();
        entity.setTitle(task.getTitle());
        entity.setDescription(task.getDescription());
        entity.setStatus(task.getStatus());
        repository.save(entity);

        return entity;
    }

    public void delete(Long id) {

        Task entity = repository.findById(id).orElseThrow();

        repository.delete(entity);
    }
}
