package br.com.jgarciarosa.sgt.repositories;

import br.com.jgarciarosa.sgt.data.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {}
