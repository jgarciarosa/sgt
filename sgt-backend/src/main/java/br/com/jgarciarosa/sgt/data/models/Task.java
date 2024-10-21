package br.com.jgarciarosa.sgt.data.models;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "task")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
public class Task implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title", nullable = false, length = 25)
    private String title;
    @Column(name = "description", nullable = false, length = 60)
    private String description;
    @Column(name = "status", nullable = false)
    private Boolean status;
}
