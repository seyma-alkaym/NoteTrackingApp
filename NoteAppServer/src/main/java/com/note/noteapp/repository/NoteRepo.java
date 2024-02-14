package com.note.noteapp.repository;

import com.note.noteapp.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteRepo extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n ORDER BY n.note desc")
    List<Note> findAllOrderByNote();

    @Query("SELECT AVG(n.note) FROM Note n")
    Double averageCalculation();
}
