package br.com.jgarciarosa.sgt.controllers;

import br.com.jgarciarosa.sgt.data.models.Task;
import br.com.jgarciarosa.sgt.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    TaskServices services;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(value = "/{id}")
    public Task findById(@PathVariable(value = "id") Long id) {

        return services.findById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Task> findAll() {

        return services.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Task create(@RequestBody Task task) {

        return services.create(task);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Task update(@PathVariable(value = "id") Long id, @RequestBody Task task) {

        return services.update(id, task);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") Long id) {
        services.delete(id);

        return ResponseEntity.noContent().build();
    }
}
