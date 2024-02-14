package com.note.noteapp.service;

import com.note.noteapp.dto.NoteDto;
import com.note.noteapp.entity.Note;
import com.note.noteapp.repository.NoteRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteService {

    private final NoteRepo noteRepo;

    public List<Note> getAllNotes(){
        return noteRepo.findAll();
    }

    public List<Note> getSortedNotes(){
        return noteRepo.findAllOrderByNote();
    }

    public Note addNewNote(NoteDto noteDto){
        String firstname = Character
                .toUpperCase(noteDto.getStudentFirstname().charAt(0))
                + noteDto.getStudentFirstname().substring(1).toLowerCase();

        String lastname = noteDto.getStudentLastname().toUpperCase();

        Note note = Note.builder()
                .studentFirstname(firstname)
                .studentLastname(lastname)
                .note(noteDto.getNote())
                .createdAt(LocalDateTime.now())
                .build();

        noteRepo.save(note);

        return note;
    }

    public ResponseEntity<?> deleteNote(Long id){
        Note note = noteRepo
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Invalid Id was provided"));

        noteRepo.deleteById(id);

        MultiValueMap<String,String> headers = new LinkedMultiValueMap<>();
        headers.add("Delete-Massage", "The record has been deleted successfully");

        return new ResponseEntity<>("",
                new HttpHeaders(headers),
                HttpStatus.NO_CONTENT);
    }

    public Note getNote(Long id){
        Note note = noteRepo
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Invalid Id was provided"));

        return note;
    }

    public Double averageCalculation(){
        return noteRepo.averageCalculation();
    }
}

