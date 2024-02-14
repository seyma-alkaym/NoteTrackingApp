package com.note.noteapp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_firstname")
    private String studentFirstname;

    @Column(name = "student_lastname")
    private String studentLastname;

    @Max(100)
    @Min(0)
    private Double note;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
